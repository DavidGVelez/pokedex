import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";

const useStyles = makeStyles({
  row: {
    margin: "1rem 0",
    border: "none",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.colors.orange,
    width: "500px",
    textAlign: "center",
    // padding: "0 1rem",
    "&:hover": {
      // backgroundColor: theme.colors.red,
      boxShadow: " 0 0 11px #555",
    },
  },
  text: {
    flexGrow: 1,
    display: "inherit",
    textTransform: "uppercase",
    justifyContent: "space-between",
    padding: "0 3rem",
    textAlign: "left",
    fontSize: theme.fontSize.large,
  },
});

export default function PokemonEntry({ id, name, img }) {
  const classes = useStyles();
  return (
    <button className={classes.row} onClick={() => console.log({ id })}>
      <img src={img} alt={name} />
      <div className={classes.text}>
        <span># {id}</span>
        <span>{name}</span>
      </div>
    </button>
  );
}
