import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import PokemonHeader from "../organisms/PokemonHeader";
import Title from "../atoms/Title";
import InfoContainer from "../atoms/InfoContainer";
import BasicInfo from "../atoms/BasicInfo";
import { theme } from "../../theme";
import {
  getPokemon,
  getPokemonSpeciesData,
} from "../../services/pokemon.services";
const useStyles = makeStyles({
  pokemon: {
    maxWidth: "600px",
    margin: "auto",
    backgroundColor: theme.colors.white,
  },
  infoWrapper: {
    padding: "1rem",
  },
});
export default function Pokemon({ id }) {
  const [pokemon, setPokemon] = useState({});
  const [pokemonId] = useState(id);
  const [pokemonSpecies, setPokemonSpecies] = useState({});
  useEffect(() => {
    getPokemon(pokemonId).then((data) => setPokemon(data));
  }, [pokemonId]);

  const classes = useStyles();
  console.log("pokemon", pokemon);
  return pokemon ? (
    <div id="pokemon" className={classes.pokemon}>
      <Title text={pokemon.name} size="h1" />
      <div className={classes.infoWrapper}>
        <PokemonHeader {...pokemon} />
        <InfoContainer
          text={"Basic Info"}
          children={<BasicInfo {...pokemon} />}
        />
      </div>
    </div>
  ) : (
    <> </>
  );
}
