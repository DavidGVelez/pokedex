import React from "react";
import { makeStyles } from "@material-ui/styles";
import { getIdFromUrl } from "../../normalize";

const useStyles = makeStyles({
  evolutionWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > figure": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "&> figcaption": {
        fontSize: "13px",
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
export default function Evolutions({ evolutionChain }) {
  const howEvolves = (evolutionDetails) => {
    var result = ["Evolves "];
    Object.keys(evolutionDetails).forEach((key) => {
      key === "min_level" &&
        evolutionDetails[key] !== null &&
        result.push(`at Lvl ${evolutionDetails[key]}`);
      key === "min_happiness" &&
        evolutionDetails[key] !== null &&
        result.push(`with happiness(${evolutionDetails[key]})`);
      key === "location" &&
        evolutionDetails[key] !== null &&
        result.push(`in ${evolutionDetails[key].name}`);
      key === "gender" &&
        evolutionDetails[key] !== null &&
        result.push(` being  ${evolutionDetails[key]}`);
      key === "known_move" &&
        evolutionDetails[key] !== null &&
        result.push(`knowing ${evolutionDetails[key].name}`);
      key === "known_move_type" &&
        evolutionDetails[key] !== null &&
        result.push(`knowing a ${evolutionDetails[key].name} attack`);
      key === "held_item" &&
        evolutionDetails[key] !== null &&
        result.push(`holding ${evolutionDetails[key].name.replace("-", " ")}`);
      key === "item" &&
        evolutionDetails[key] !== null &&
        result.push(`using ${evolutionDetails[key].name.replace("-", " ")}`);
      key === "min_affection" &&
        evolutionDetails[key] !== null &&
        result.push(`having affection (${evolutionDetails[key]})`);
      key === "min_beauty" &&
        evolutionDetails[key] !== null &&
        result.push(`beauty ${evolutionDetails[key].name}`);
      key === "needs_overworld_rain" &&
        evolutionDetails[key] !== false &&
        result.push(`when raining `);
      key === "party_species" &&
        evolutionDetails[key] !== null &&
        result.push(`having ${evolutionDetails[key].name} on your team`);
      key === "party_type" &&
        evolutionDetails[key] !== null &&
        result.push(
          `having ${evolutionDetails[key].name} type pokemon on your team`
        );
      key === "relative_physical_stats" &&
        evolutionDetails[key] !== null &&
        (evolutionDetails[key] === 0
          ? result.push(`having as attack as defense `)
          : evolutionDetails[key] === 1
          ? result.push(`having more attack than defense`)
          : result.push(`having more defense than attack `));
      key === "time_of_day" &&
        evolutionDetails[key] !== "" &&
        result.push(`during ${evolutionDetails[key]} `);
      key === "trade_species" &&
        evolutionDetails[key] !== null &&
        result.push(`at ${evolutionDetails[key]} `);
      key === "turn_upside_down" &&
        evolutionDetails[key] !== false &&
        result.push(`turning your screen down `);
      key === "trigger" &&
        evolutionDetails[key].name === "shed" &&
        result.push(
          `having an empty space and a pokemon when evolving nincada `
        );
      key === "trigger" &&
        evolutionDetails[key].name === "trade" &&
        result.push(`when trading`);
    });

    return result.join(" ");
  };

  function printPokemon(pokemon) {
    return (
      <div className={classes.evolutionWrapper}>
        {pokemon.evolution_details.length > 0 && (
          <figure className={classes.evolvesTo}>
            <img
              className={classes.arrow}
              src={process.env.PUBLIC_URL + `/next.png`}
              alt="evolves to"
            />
            <figcaption>
              {pokemon.evolution_details.map((option) => {
                return howEvolves(option);
              })}
            </figcaption>
          </figure>
        )}
        <figure>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(
              pokemon.species.url
            )}.png`}
            alt={pokemon.species.name}
          />
          <figcaption>{pokemon.species.name}</figcaption>
        </figure>

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
    <div className={`${classes.evolutionWrapper} ${classes.container}`}>
      {evolutionChain && printPokemon(evolutionChain.chain)}
      {/* {evolutionChain.chain.evolves_to.length > 0 && getEvolutions(evolutionChain.chain.evolves_to)} */}
    </div>
  );
}
