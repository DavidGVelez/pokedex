import React from "react";
import FilterNav from "../components/organisms/FilterNav";
import { storiesOf } from "@storybook/react";

const props = {
  regionList: [
    {
      region: "kanto",
      handleClickRegion: () => console.log("kanto"),
    },
    {
      region: "jhotto",
      handleClickRegion: () => console.log("jhotto"),
    },
    {
      region: "hoenn",
      handleClickRegion: () => console.log("hoenn"),
    },
    {
      region: "teselia",
      handleClickRegion: () => console.log("teselia"),
    },
    {
      region: "kalos",
      handleClickRegion: () => console.log("kalos"),
    },
    {
      region: "alola",
      handleClickRegion: () => console.log("alola"),
    },
    {
      region: "galar",
      handleClickRegion: () => console.log("galar"),
    },
  ],
};

storiesOf("Organisms|FilterNav", module).add("default", () => (
  <FilterNav {...props} />
));
