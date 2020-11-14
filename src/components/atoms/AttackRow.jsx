import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  attackRow: {
    display: "flex",
    height: "1rem",
    padding: "5rem 0",
    "& > span": {
      width: "25%",
    },
  },
  button: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/left-arrow.png"}`,
    width: "100%",
    height: "100%",
    margin: "center",
    objectFit: "cover",
    transform: "rotate(-180deg)",
    filter: "invert(100%)",
  },
});

export default function AttackRow({ lvl, name, type, handleShowMore }) {
  const classes = useStyles();

  return (
    <div className={classes.attackRow}>
      <span>{lvl}</span>
      <span>{name}</span>
      <span>{type}</span>
      <button
        className={classes.button}
        type="button"
        onClick={() => handleShowMore}
      ></button>
    </div>
  );
}
