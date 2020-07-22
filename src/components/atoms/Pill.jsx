import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";

const useStyles = makeStyles({
  pill: {
    margin: theme.margin.medium,
    width: "5rem",
    display: "inline-flex",
    border: "1px solid black",
  },
  text: {
    fontSize: ".8rem",
    padding: ".5rem",
    textTransform: "uppercase",
    margin: "auto",
    color: "#ffffff",
  },
  bug: {
    backgroundColor: theme.colors.bug,
  },
  dark: {
    backgroundColor: theme.colors.dark,
  },
  dragon: {
    backgroundColor: theme.colors.dragon,
  },
  electric: {
    backgroundColor: theme.colors.electric,
  },
  fairy: {
    backgroundColor: theme.colors.fairy,
  },
  fighting: {
    backgroundColor: theme.colors.fighting,
  },
  fire: {
    backgroundColor: theme.colors.fire,
  },
  flying: {
    backgroundColor: theme.colors.flying,
  },
  ghost: {
    backgroundColor: theme.colors.ghost,
  },
  grass: {
    backgroundColor: theme.colors.grass,
  },
  ground: {
    backgroundColor: theme.colors.ground,
  },
  ice: {
    backgroundColor: theme.colors.ice,
  },
  normal: {
    backgroundColor: theme.colors.normal,
  },
  poison: {
    backgroundColor: theme.colors.poison,
  },
  psychic: {
    backgroundColor: theme.colors.psychic,
  },
  rock: {
    backgroundColor: theme.colors.rock,
  },
  steel: {
    backgroundColor: theme.colors.steel,
  },
  water: {
    backgroundColor: theme.colors.water,
  },
  x2: {
    width: "2rem",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "green",
  },
  notEffective: {
    width: "2rem",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "red",
  },
  immune: {
    width: "2rem",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "black",
  },
});

export default function Pill({ type, name }) {
  const classes = useStyles();
  return (
    <div className={`${classes.pill} ${classes[type]}`}>
      <span className={classes.text}>{name}</span>
    </div>
  );
}
