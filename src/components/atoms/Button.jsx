import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";

const useStyles = makeStyles({
  button: {
    backgroundColor: "transparent",
    border: "none",
    color: theme.colors.white,
  },
  "button:hover": {
    backgroundColor: theme.colors.white,
  },
});

export default function Button({ children, text, handleClick }) {
  const classes = useStyles();

  return (
    <button className={classes.button} onClick={() => handleClick(text)}>
      {children ? children : text}
    </button>
  );
}
