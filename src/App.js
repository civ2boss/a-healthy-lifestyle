import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import useHealthApi from "./hooks/useHealthApi";
import Search from "./components/Search";
import Main from "./components/Main";

const useStyles = makeStyles({
  app: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr);",
    gridGap: "1rem",
    padding: "0 20px"
  },
  heading: {
    gridColumn: "1 / -1"
  },
  footer: {
    borderTop: "1px solid #000",
    gridColumn: "1 / -1"
  }
});

function App() {
  const [age, setAge] = useState(35);
  const [sex, setSex] = useState("female");
  const [pregnant, setPregnant] = useState(false);
  const [search, setSearch] = useState("");
  const classes = useStyles();

  const result = useHealthApi(search, {});

  return (
    <div className={classes.app}>
      <h1 className={classes.heading}>A Healthy Lifestyle</h1>
      <Search
        age={age}
        sex={sex}
        pregnant={pregnant}
        setAge={setAge}
        setSex={setSex}
        setPregnant={setPregnant}
        setSearch={setSearch}
      />
      {result && result.Total && result.Total > 0 && <Main result={result} />}
      {result && result && result.AboutTheseResults && (
        <footer className={classes.footer}>
          <p
            dangerouslySetInnerHTML={{
              __html: result.AboutTheseResults
            }}
          />
        </footer>
      )}
    </div>
  );
}

export default App;
