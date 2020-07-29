import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";

const useStyles = makeStyles({
  progressBar: {
    display: "flex",
    position: "relative",
    width: "200px",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1px 0",
    "&> progress": {
      width: "100%",
      height: "1.2rem",
    },
    "&> label": {
      position: "absolute",
      color: "#333",
      fontWeight: "bold",
      right: "0%",
      paddingRight: "1rem",
    },

    "&> progress[value]": {
      borderRadius: "3px",
      boxShadow: "0 2px 3px rgba(0,0,0,.5) inset",
    },
    "&> progress[value]::-webkit-progress-bar": {
      backgroundColor: "whiteSmoke",
      borderRadius: "3px",
      boxShadow: "0 2px 3px rgba(0,0,0,.5) inset",
    },
    "&> progress[value]::-webkit-progress-value": {
      backgroundColor: (num) => {
        if (num < 49) {
          return theme.colors.fire;
        } else if (num <= 99) {
          return theme.colors.ground;
        } else if (num <= 149) {
          return theme.colors.electric;
        } else if (num <= 199) {
          return theme.colors.bug;
        } else if (num >= 200) {
          return theme.colors.grass;
        } else {
          return "gray";
        }
      },

      borderRadius: "2px",
      backgroundSize: "35px 20px, 100% 100%, 100% 100%",
    },
  },
});

export default function Progress({ id, value, max = 232 }) {
  const num = Number.parseInt(value);
  const classes = useStyles(num);
  return (
    <div className={classes.progressBar}>
      <progress {...{ id }} {...{ value }} {...{ max }}></progress>
      <label htmlFor={id}>{value}</label>
    </div>
  );
}
