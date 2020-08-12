import React from "react";
import Progress from "../atoms/Progress";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  statWrapper: {
    maxWidth: " 350px",
    display: "flex",
    flexDirection: "column",
  },
  statRow: {
    display: "inherit",
    fontSize: "14px",
    margin: "1px 0",
    justifyContent: "space-between",
  },
});
export default function Stats({ hp, attack, defense, spAttack, spDef, speed }) {
  const classes = useStyles();

  return (
    <div className={classes.statWrapper}>
      <div className={classes.statRow}>
        <span>Hp</span>
        <Progress label="hp" value={hp} />
      </div>
      <div className={classes.statRow}>
        <span>Attack</span>
        <Progress label="attack" value={attack} />
      </div>
      <div className={classes.statRow}>
        <span>Defense</span>
        <Progress label="defense" value={defense} />
      </div>
      <div className={classes.statRow}>
        <span>Sp Attk</span>
        <Progress label="spAttack" value={spAttack} />
      </div>
      <div className={classes.statRow}>
        <span>Sp Def</span>
        <Progress label="spDef" value={spDef} />
      </div>
      <div className={classes.statRow}>
        <span>Speed</span>
        <Progress label="speed" value={speed} />
      </div>
    </div>
  );
}
Stats.defaultProps = {
  hp: 0,
  attack: 0,
  defense: 0,
  spAttack: 0,
  spDef: 0,
  speed: 0,
};
