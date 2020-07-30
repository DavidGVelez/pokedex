import React from "react";
import PokemonEntry from "../components/atoms/PokemonEntry";
import pikachu from "../pikachu.json";

const props = {
  name: pikachu.name,
  id: pikachu.id,
  url: pikachu.sprites.front_default,
};

export const pokemonentry = () => <PokemonEntry {...props} />;

export default {
  component: pokemonentry,
  title: "Atoms|PokemonEntry",
};
