import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";
import Types from "../molecules/Types";
import Stats from "../atoms/Stats";
const useStyles = makeStyles({
  wrapper: {
    padding: theme.padding["x-axis"].large,
    margin: "auto",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.colors.white,
  },
  basicInfo: {
    width: "100%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    // padding: theme.padding["y-axis"].medium,
    "&> div": {
      flexGrow: 1,
    },
  },
  img: {
    width: "150px",
  },
  stats: {
    flexGrow: 1,
  },
  types: {
    width: "100%",
    "&> div": {
      display: "flex",
      justifyContent: "center",
    },
  },
  flavor: {
    padding: "0 1rem",
  },
});

export default function PokemonHeader({
  types,
  name,
  img,
  stats,
  subname = "missing",
  flavour = "lorem Ipsum",
}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.basicInfo}>
        <img className={classes.img} src={img} alt={name} />
        <Stats {...stats} />
      </div>
      <div className={classes.types}>
        <Types {...{ types }} />
      </div>
      <div className={classes.flavor}>
        <h3>{subname} Pokemon</h3>
        <p>{flavour}</p>
      </div>
    </div>
  );
}
