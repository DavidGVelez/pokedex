import React from "react";
import AttackRow from "../components/atoms/AttackRow";

const props = {
  lvl: 16,
  name: "ataque rapido",
  type: "fire",
  handleShowMore: () => {
    console.log("click");
  },
};

export const attackrow = () => <AttackRow {...props} />;

export default {
  component: attackrow,
  title: "Atoms|Attack Row",
};
