import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  evolutionWrapper: {
    display: "flex",
    alignItems: "center",
    "& > figure": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "&> figcaption": {
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "1rem",
      },
    },
  },
  arrow: {
    width: "2rem",
  },
});
//WIP
export default function Evolutions({ data }) {
  function getIdFromUrl(url) {
    var str = url.substr(42);
    return str.replace(/\D/g, "");
  }
  function howPokemonEvolves(evolutionDetails) {
    //WIP
  }

  function printPokemon(pokemon) {
    return (
      <div className={classes.evolutionWrapper}>
        <figure>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(
              pokemon.species.url
            )}.png`}
            alt={pokemon.species.name}
          />
          <figcaption>{pokemon.species.name}</figcaption>
        </figure>
        {pokemon.evolves_to.length > 0 && (
          <figure className={classes.evolvesTo}>
            <img
              className={classes.arrow}
              src={process.env.PUBLIC_URL + `/next.png`}
              alt="evolves to"
            />
            <figcaption>
              {howPokemonEvolves(pokemon.evolution_details[0])}
            </figcaption>
          </figure>
        )}
        {pokemon.evolves_to.length > 0 && getEvolutions(pokemon.evolves_to)}
      </div>
    );
  }

  function getEvolutions(evolutions) {
    return evolutions.map((pokemon) => {
      return printPokemon(pokemon);
    });
  }

  const classes = useStyles();

  return (
    <div className={classes.evolutionWrapper}>
      {printPokemon(data.chain)}
      {/* {data.chain.evolves_to.length > 0 && getEvolutions(data.chain.evolves_to)} */}
    </div>
  );
}
