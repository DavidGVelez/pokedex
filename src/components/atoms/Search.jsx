import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";
const useStyles = makeStyles({
  input: {
    border: 0,
    borderBottom: `1px solid ${theme.colors.white}`,
    backgroundColor: "transparent",
    color: theme.colors.white,
    "&:focus": {
      outline: "none",
    },
  },
});
export default function Search() {
  const [value, setValue] = useState("");
  const classes = useStyles();
  return (
    <input
      className={classes.input}
      onChange={(event) => setValue(event.target.value)}
      value={value}
      type="search"
      placeholder="Search"
    />
  );
}
