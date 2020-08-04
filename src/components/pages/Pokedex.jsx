import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import FilterNav from "../organisms/FilterNav";
import PokemonGrid from "../molecules/PokemonGrid";
import Footer from "../organisms/Footer";
import { theme } from "../../theme";
import { REGIONS, MAX_LIMIT } from "../../constants";
import { getPokemonsByBoundaries } from "../../services/pokemon.services";

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
  const [list, setList] = useState();
  const [limit, setLimit] = useState(REGIONS.kanto.limit);
  const [offset, setOffset] = useState(REGIONS.kanto.offset);
  useEffect(() => {
    getPokemonsByBoundaries(limit, offset).then((data) => setList(data));
  }, [limit, offset]);
  const classes = useStyles();
  console.log("LISTA", list);
  return list ? (
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
        <PokemonGrid pokemonList={list} />
      </main>
      <Footer />
    </div>
  ) : (
    <>
      <h1>Loading</h1>{" "}
    </>
  );
}
