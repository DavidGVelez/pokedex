import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  evolutionWrapper: {
    display: "flex",
    justifyContent: "space-around",
    "& > figure": {
      width: "20%",
    },
  },
});
//WIP
export default function Evolutions({ data }) {
  function getIdFromUrl(url) {
    var str = url.substr(42);
    return str.replace(/\D/g, "");
  }

  function getEvolutions(evolutions) {
    return evolutions.map((pokemon) => {
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
          {pokemon.evolves_to.length > 0
            ? getEvolutions(pokemon.evolves_to)
            : null}
        </div>
    
    });
  }

  const classes = useStyles();

  return (
    <div className={classes.evolutionWrapper}>
      <figure>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(
            data.chain.species.url
          )}.png`}
          alt={data.chain.species.name}
        />
        <figcaption>{data.chain.species.name}</figcaption>
      </figure>
      {data.chain.evolves_to.length > 0
        ? getEvolutions(data.chain.evolves_to)
        : console.log(data.chain.evolves_to)}
    </div>
  );
}
