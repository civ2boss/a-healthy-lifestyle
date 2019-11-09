import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Section from "./Section";

const useStyles = makeStyles({
  main: {
    gridColumn: "span 10"
  }
});

function Main({ result: { MyHFHeading: heading, Resources: topics } }) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <h2 dangerouslySetInnerHTML={{ __html: heading }} />
      {topics.Pregnant && <Section resource={topics.Pregnant} />}
      <Section resource={topics.All} />
      <Section resource={topics.Some} />
      <Section resource={topics.Interest} />
    </div>
  );
}

export default Main;
