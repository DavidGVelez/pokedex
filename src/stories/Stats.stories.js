import React from "react";
import Stats from "../components/atoms/Stats";

const props = {
  hp: 50,
  attack: 125,
  defense: 40,
  spAttack: 200,
  spDef: 120,
  speed: 60,
};

export const stats = () => <Stats {...props} />;

export default {
  component: stats,
  title: "Atoms|Stats",
};
