import React from "react";
import PokemonGrid from "../components/molecules/PokemonGrid";
import Pokemon from "../components/atoms/Pokemon";
import pikachu from "../pikachu.json";

const data = [
  {
    name: pikachu.name,
    id: pikachu.id,
    url: pikachu.sprites.front_default,
  },
  {
    name: pikachu.name,
    id: pikachu.id,
    url: pikachu.sprites.front_default,
  },
  {
    name: pikachu.name,
    id: pikachu.id,
    url: pikachu.sprites.front_default,
  },
  {
    name: pikachu.name,
    id: pikachu.id,
    url: pikachu.sprites.front_default,
  },
  {
    name: pikachu.name,
    id: pikachu.id,
    url: pikachu.sprites.front_default,
  },
  {
    name: pikachu.name,
    id: pikachu.id,
    url: pikachu.sprites.front_default,
  },
];

export const pokemonGrid = () => <PokemonGrid {...{ data }} />;

export default {
  component: pokemonGrid,
  title: "Molecules|PokemonGrid",
};
