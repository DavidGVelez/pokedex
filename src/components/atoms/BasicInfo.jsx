import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";
const useStyles = makeStyles({
  container: {
    margin: "auto",
    maxWidth: "600px",
    display: "flex",
    backgroundColor: theme.colors.white,
    flexWrap: "wrap",
    padding: "0 1rem",
  },
  row: {
    display: "inherit",
    width: "50%",
    margin: ".5rem 0",

    "&>span": {
      width: "60%",
    },
    "&> h4": {
      margin: "0",
      width: "40%",
    },
  },
});

export default function BasicInfo({
  height = 0,
  weight = 0,
  eggGroup = "patata",
  captureRate = 0,
  hatchSteps = 0,
  gender = [0, 1],
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <h4>Height:</h4>
        <span>{height}</span>
      </div>
      <div className={classes.row}>
        <h4>Weight:</h4>
        <span>{weight}</span>
      </div>
      <div className={classes.row}>
        <h4>Egg Group:</h4>
        <span>{eggGroup}</span>
      </div>
      <div className={classes.row}>
        <h4>Capure Rate:</h4>
        <span>{captureRate}</span>
      </div>
      <div className={classes.row}>
        <h4>Hatch Steps:</h4>
        <span>{hatchSteps}</span>
      </div>
      <div className={classes.row}>
        <h4>Gender:</h4>
        <span>
          ♂ {gender[0]}%/ ♀{gender[1]}%
        </span>
      </div>
    </div>
  );
}
