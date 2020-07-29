import React from "react";
import Pokemon from "../atoms/Pokemon";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";
const useStyles = makeStyles({
  grid: {
    margin: "auto",
    width: "35rem",
    height: "500px",
    overflow: "auto",
    padding: "2rem",
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-evenly",
    listStyleType: "none",
    backgroundColor: theme.colors.white,
  },
});

export default function PokemonGrid(props) {
  const classes = useStyles();

  return (
    <ul className={classes.grid}>
      {props.data.map((pokemon) => (
        <li>
          <Pokemon url={pokemon.url} name={pokemon.name} id={pokemon.id} />
        </li>
      ))}
    </ul>
  );
}
