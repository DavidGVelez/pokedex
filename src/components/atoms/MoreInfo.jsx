import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";
const useStyles = makeStyles({
  card: {
    padding: theme.padding.large,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "30rem",
    backgroundColor: theme.colors.background,
  },
  stats: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "&> h3": {
      textAlign: "center",
    },
    "&> div": {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
      "&> span": {},
    },
  },
});

export default function MoreInfo({}) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.stats}>
        {/* <h3>Stats</h3>
        <div>
          <span>Hp</span>
          <span>Attack</span>
          <span>Defense</span>
          <span>Sp Attk</span>
          <span>Sp Def</span>
          <span>Speed</span>
        </div> */}
      </div>
      {/* <div className={classes.others}>
        <span>Width</span>
        <span>Height</span>
      </div> */}
    </div>
  );
}
