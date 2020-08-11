import React from "react";
import { theme } from "../../theme";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  footer: {
    padding: "2rem",
    backgroundColor: theme.colors.black,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.colors.white,
    fontSize: theme.fontSize.small,
    "&> a > img": {
      width: "24px",
      cursor: "pointer",
    },
  },
});
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <span>
        All content belongs to © Nintendo, Game Freak & The Pokemon Company
      </span>
      <ul>
        <li></li>
        <li></li>
      </ul>

      <a href="https://github.com/DavidGVelez/pokedex">
        <img src={process.env.PUBLIC_URL + "/github.svg"} alt="github icon" />
      </a>
    </div>
  );
}
