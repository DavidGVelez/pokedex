import React from "react";
import Pill from "../components/atoms/Pill";
import { storiesOf } from "@storybook/react";

storiesOf("Atoms|Pill", module)
  .add("fire", () => <Pill type="fire" name="fire" />)
  .add("ice", () => <Pill type="ice" name="ice" />)
  .add("dark", () => <Pill type="dark" name="dark" />)
  .add("water", () => <Pill type="water" name="water" />)
  .add("type", () => <Pill type="immune" name="1/2" />);
