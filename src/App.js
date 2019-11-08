import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import useHealthApi from "./hooks/useHealthApi";
import Form from "./components/Form";

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
  sidebar: {
    gridColumn: "1 / span 3"
  },
  main: {
    gridColumn: "4 / -1"
  }
});

function App() {
  const [age, setAge] = useState(35);
  const [sex, setSex] = useState("female");
  const [pregnant, setPregnant] = useState(false);
  const [search, setSearch] = useState("");
  const classes = useStyles();

  let result = useHealthApi(search, {});
  console.log(result);

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log("Hey");

    setSearch({ age, sex, pregnant });
  };

  return (
    <div className={classes.app}>
      <h1 className={classes.heading}>A Healthy Lifestyle</h1>
      <div className={classes.sidebar}>
        <form onSubmit={handleFormSubmit}>
          <Form
            age={age}
            setAge={setAge}
            sex={sex}
            setSex={setSex}
            pregnant={pregnant}
            setPregnant={setPregnant}
          />
        </form>
      </div>
      {result && result.Result && result.Result.Total > 0 && (
        <div className={classes.main}>
          <h2 dangerouslySetInnerHTML={{ __html: result.Result.MyHFHeading }} />
        </div>
      )}
    </div>
  );
}

export default App;
