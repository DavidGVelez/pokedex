import React from "react";
import MoreInfo from "../components/atoms/MoreInfo";
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
};

export const moreinfo = () => <MoreInfo {...props} />;

export default {
  component: moreinfo,
  title: "Organisms|More Info",
};
