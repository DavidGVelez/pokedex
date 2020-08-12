import React, { useState, useEffect } from "react";
import PokemonEntry from "../atoms/PokemonEntry";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../constants";
const useStyles = makeStyles({
  grid: {
    margin: "auto",
    height: "400px",
    width: "50rem",
    overflow: "auto",
    padding: "2rem 0",
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "space-evenly",
    listStyleType: "none",
    backgroundColor: theme.colors.white,
  },
});

export default function PokemonGrid({ pokemonList, handleShowInfo }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(pokemonList);
  }, [pokemonList]);
  const classes = useStyles();

  return (
    // <div>
    <ul className={classes.grid}>
      {data.map((pokemon) => (
        <li>
          {/* <Link to={`/pokemon/${pokemon.id}`}> */}
          <PokemonEntry
            img={pokemon.img}
            name={pokemon.name}
            id={pokemon.id}
            {...{ handleShowInfo }}

            // {...pokemon}
          />
          {/* </Link> */}
        </li>
      ))}
    </ul>
    // </div>
  );
}
