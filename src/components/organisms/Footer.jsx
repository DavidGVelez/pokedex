import React from "react";
import { theme } from "../../theme";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  footer: {
    padding: "2rem",
    backgroundColor: theme.colors.black,
  },
});
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <span>footer</span>
    </div>
  );
}
