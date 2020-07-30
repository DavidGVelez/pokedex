import React from "react";
import Pokemon from "../components/pages/Pokemon";
import pikachu from "../pikachu.json";
const TYPES = [];
pikachu.types.map((type) =>
  TYPES.push({ type: type.type.name, name: type.type.name })
);

const props = {
  name: pikachu.name,
  id: pikachu.id,
  img: pikachu.sprites.front_default,
  types: TYPES,
  subname: "prueba",
  flavour: "flavour text",
  stats: {
    hp: 100,
    attack: 90,
    defense: 25,
    spAttack: 57,
    spDef: 23,
    speed: 14,
  },
};

export const pokemonPage = () => <Pokemon {...props} />;

export default {
  component: pokemonPage,
  title: "Pages|Pokemon Page",
};
