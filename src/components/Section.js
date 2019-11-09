import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  topics: {
    display: 'grid',
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gridGap: '1rem',
    listStyle: "none",
    margin: "0",
    padding: "0"
  },
  topic: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  image: {
    width: '100%'
  }
});

function Section({ resource: { Resource: topics } }) {
  const classes = useStyles();

  return (
    <div>
      <h3
        dangerouslySetInnerHTML={{
          __html: topics[0].MyHFCategoryHeading
        }}
      />
      <ul className={classes.topics}>
        {topics.map(topic => (
          <li className={classes.topic}>
            <a href={topic.AccessibleVersion}><img src={topic.ImageUrl} alt={topic.ImageAlt} className={classes.image} /></a>
            <a href={topic.AccessibleVersion}>{topic.Title}</a>
            {topic.MyHFDescription}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Section;
