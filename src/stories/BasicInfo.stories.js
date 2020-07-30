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
};

export const basicinfo = () => <BasicInfo {...props} />;

export default {
  component: basicinfo,
  title: "Atoms|Basic Info",
};
