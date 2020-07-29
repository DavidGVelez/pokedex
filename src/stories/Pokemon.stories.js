import React from "react";
import Pokemon from "../components/atoms/Pokemon";
import pikachu from "../pikachu.json";

const props = {
  name: pikachu.name,
  id: pikachu.id,
  url: pikachu.sprites.front_default,
};

export const pokemon = () => <Pokemon {...props} />;

export default {
  component: pokemon,
  title: "Atoms|Pokemon",
};
