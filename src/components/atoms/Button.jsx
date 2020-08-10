import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";

const useStyles = makeStyles({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "none",
    color: theme.colors.white,
    outline: "none",
    padding: "1rem",
    "&:hover": {
      color: theme.colors.black,
      backgroundColor: theme.colors.white,
    },
  },
  noHover: {
    padding: "10px",
    "&:hover": {
      borderRadius: "50%",
      color: theme.colors.white,
      backgroundColor: theme.colors.black,
    },
  },
});

export default function Button({ children, text, handleClick, noHover }) {
  const classes = useStyles();

  return (
    <button
      className={`${classes.button}  ${noHover ? classes.noHover : null} `}
      onClick={() => handleClick(text)}
    >
      {children}
      {text}
    </button>
  );
}
