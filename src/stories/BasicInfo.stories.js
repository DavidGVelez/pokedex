import React from "react";
import BasicInfo from "../components/atoms/BasicInfo";
import pikachu from "../pikachu.json";

const TYPES = [];
pikachu.types.map((type) =>
  TYPES.push({ type: type.type.name, name: type.type.name })
);
const props = {
  id: pikachu.id,
  name: pikachu.name,
  description: "lorem ipsum",
  height: pikachu.height,
  weight: pikachu.weight,
  url: pikachu.sprites.front_default,
  types: TYPES,
  stats: {
    hp: 100,
    attack: 90,
    defense: 25,
    spAttack: 57,
    spDef: 23,
    speed: 14,
  },
};

export const basicinfo = () => <BasicInfo {...props} />;

export default {
  component: basicinfo,
  title: "Organisms|Basic Info",
};
