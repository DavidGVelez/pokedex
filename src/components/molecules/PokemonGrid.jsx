import React from "react";
import PokemonEntry from "../atoms/PokemonEntry";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";
const useStyles = makeStyles({
  grid: {
    margin: "auto",
    height: "400px",
    width: "35rem",
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
    <div>
      <ul className={classes.grid}>
        {props.data.map((pokemon) => (
          <li>
            <PokemonEntry
              url={pokemon.url}
              name={pokemon.name}
              id={pokemon.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
