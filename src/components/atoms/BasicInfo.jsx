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
  eggGroup: {
    textTransform: "capitalize",
  },
});

export default function BasicInfo({
  height,
  weight,
  eggGroup = [],
  captureRate = 0,
  hatchSteps = 0,
  genderRate,
}) {
  const classes = useStyles();
  const genders = (genderRate) => {
    const femaleRate = genderRate / 8;
    const maleRate = 1 - femaleRate;
    return `♂ ${maleRate * 100} %/ ♀ ${femaleRate * 100}%`;
  };
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <h4>Height:</h4>
        <span>{height / 10} m</span>
      </div>
      <div className={classes.row}>
        <h4>Weight:</h4>
        <span>{weight / 10} kg</span>
      </div>
      <div className={classes.row}>
        <h4>Egg Group:</h4>
        <span className={classes.eggGroup}>{eggGroup.join(", ")}</span>
      </div>
      <div className={classes.row}>
        <h4>Capure Rate:</h4>
        <span>{Math.round((captureRate * 100) / 255)} %</span>
      </div>
      <div className={classes.row}>
        <h4>Hatch Steps:</h4>
        <span>{255 * (hatchSteps + 1)}</span>
      </div>
      <div className={classes.row}>
        <h4>Gender:</h4>
        <span>{genders(genderRate)}</span>
      </div>
    </div>
  );
}
