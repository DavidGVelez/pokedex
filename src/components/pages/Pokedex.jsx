import React from "react";
import { makeStyles } from "@material-ui/styles";
import Entry from "../atoms/BasicInfo";
import FilterNav from "../organisms/FilterNav";
import PokemonGrid from "../molecules/PokemonGrid";
import pikachu from "../../pikachu.json";
import { theme } from "../../theme";

const useStyles = makeStyles({
  main: {
    width: "80%",
    margin: "auto",
    padding: "2rem 0",
  },
  header: {
    backgroundColor: theme.colors.black,
  },
});
const TYPES = [];
pikachu.types.map((type) =>
  TYPES.push({ type: type.type.name, name: type.type.name })
);
const pokemon = {
  id: pikachu.id,
  name: pikachu.name,
  description: "lorem ipsum",
  height: pikachu.height,
  weight: pikachu.weight,
  url: pikachu.sprites.front_default,
  types: TYPES,
};

export default function Pokedex() {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
        <FilterNav
          regionList={[
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
          ]}
        />
      </header>
      <main className={classes.main}>
        <PokemonGrid
          data={[
            {
              name: pikachu.name,
              id: pikachu.id,
              url: pikachu.sprites.front_default,
            },
            {
              name: pikachu.name,
              id: pikachu.id,
              url: pikachu.sprites.front_default,
            },
            {
              name: pikachu.name,
              id: pikachu.id,
              url: pikachu.sprites.front_default,
            },
            {
              name: pikachu.name,
              id: pikachu.id,
              url: pikachu.sprites.front_default,
            },
            {
              name: pikachu.name,
              id: pikachu.id,
              url: pikachu.sprites.front_default,
            },
            {
              name: pikachu.name,
              id: pikachu.id,
              url: pikachu.sprites.front_default,
            },
          ]}
        />
      </main>
    </div>
  );
}
