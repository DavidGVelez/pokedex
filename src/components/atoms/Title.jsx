import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";
const useStyles = makeStyles({
  container: {
    backgroundColor: theme.colors.container,
    color: theme.colors.white,
    margin: 0,
    textTransform: "uppercase",
  },
  title: {
    textAlign: "center",
    padding: "1.2rem 0",
    margin: 0,
  },
  subtitle: {
    marginLeft: "1rem",
    padding: ".5rem 0",
    textTransform: "uppercase",
  },
});

export default function Title({ text, size }) {
  const classes = useStyles(size);

  return (
    <div className={classes.container}>
      {size === "h1" ? (
        <h1 className={classes.title}>{text}</h1>
      ) : size === "h2" ? (
        <h2 className={classes.subtitle}>{text}</h2>
      ) : (
        <h3 className={classes.subtitle}>{text}</h3>
      )}
    </div>
  );
}
