import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  container: {
    margin: "auto",
    maxWidth: "600px",
    display: "flex",
    backgroundColor: theme.colors.white,
    flexWrap: "wrap",
    padding: "0 1rem",
    "& :last-child ": {
      textTransform: "capitalize",
      "&> span": {
        margin: 0,
        width: "100%",
      },
    },
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
  hidden: {
    fontWeight: "600",
  },
});

export default function BasicInfo({
  height,
  weight,
  eggGroup,
  captureRate,
  hatchSteps,
  genderRate,
  abilities,
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
      <div className={classes.row}>
        <h4>Abilities:</h4>
        <span>
          {abilities.map((ability) => {
            return (
              <span
                className={`${ability.isHidden ? classes.hidden : null} ${
                  classes.row
                }`}
              >
                {ability.name}
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
}
BasicInfo.prototypes = {
  height: PropTypes.number,
  weight: PropTypes.number,
  eggGroup: PropTypes.array,
  captureRate: PropTypes.number,
  genderRate: PropTypes.number,
  hatchSteps: PropTypes.number,
  abilities: PropTypes.array,
};
BasicInfo.defaultProps = {
  height: 0,
  weight: 0,
  captureRate: 1,
  hatchSteps: 0,
  genderRate: 0,
  eggGroup: [],
  abilities: [],
};
