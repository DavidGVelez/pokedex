import React from "react";
import { makeStyles } from "@material-ui/styles";
import FilterNav from "../organisms/FilterNav";
import PokemonGrid from "../molecules/PokemonGrid";
import Footer from "../organisms/Footer";
import pikachu from "../../pikachu.json";
import { theme } from "../../theme";

const useStyles = makeStyles({
  container: {
    fontFamily: "Helvetica",
    backgroundColor: theme.colors.fire,
    display: "flex",
    height: "100vh",
    flexDirection: "column",
  },
  main: {
    width: "80%",
    margin: "auto",
    padding: "2rem 0",
  },
  header: {
    backgroundColor: theme.colors.black,
  },
  footer: {
    backgroundColor: "black",
  },
});

export default function Pokedex() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
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
              id: 0,
              url: pikachu.sprites.front_default,
            },
            {
              name: pikachu.name,
              id: 1,
              url: pikachu.sprites.front_default,
            },
            {
              name: pikachu.name,
              id: 2,
              url: pikachu.sprites.front_default,
            },
            {
              name: pikachu.name,
              id: 3,
              url: pikachu.sprites.front_default,
            },
            {
              name: pikachu.name,
              id: 4,
              url: pikachu.sprites.front_default,
            },
            {
              name: pikachu.name,
              id: 5,
              url: pikachu.sprites.front_default,
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
