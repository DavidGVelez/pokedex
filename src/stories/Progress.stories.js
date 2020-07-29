import React from "react";
import Progress from "../components/atoms/Progress";
const props = {
  label: "label",
  value: 199,
  max: 252,
};

export const progress = () => <Progress {...props} />;

export default {
  component: progress,
  title: "Atoms|Assets|Progress",
};
