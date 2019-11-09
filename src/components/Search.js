import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Form from "./Form";

const useStyles = makeStyles({
  search: {
    gridColumn: "1 / span 2"
  }
});

function Search({
  age,
  sex,
  pregnant,
  setAge,
  setSex,
  setPregnant,
  setSearch
}) {
  const classes = useStyles();

  const handleFormSubmit = event => {
    event.preventDefault();

    setSearch({ age, sex, pregnant });
  };

  return (
    <div className={classes.search}>
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
  );
}

export default Search;
