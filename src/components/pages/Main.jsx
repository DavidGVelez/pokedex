import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import FilterNav from "../organisms/FilterNav";
import PokemonGrid from "../molecules/PokemonGrid";
import Table from "../atoms/Table";
import Footer from "../organisms/Footer";
import Pill from "../atoms/Pill";
import Pokemon from "./Pokemon";
import { theme } from "../../theme";
import { REGIONS, MAX_LIMIT } from "../../constants";
import {
  getPokemonsByBoundaries,
  getPokemon,
} from "../../services/pokemon.services";
import { Link } from "react-router-dom";
import Modal from "../atoms/Modal";

const tabla = {
  thead: [
    { type: "normal", name: "normal" },
    { type: "fire", name: "fire" },
    { type: "water", name: "water" },
    { type: "grass", name: "grass" },
    { type: "electric", name: "electric" },
    { type: "ice", name: "ice" },
    { type: "ground", name: "ground" },
    { type: "rock", name: "rock" },
    { type: "psychic", name: "psychic" },
    { type: "ghost", name: "ghost" },
    { type: "steel", name: "steel" },
    { type: "bug", name: "bug" },
    { type: "dragon", name: "dragon" },
    { type: "fighting", name: "fighting" },
    { type: "dark", name: "dark" },
    { type: "fairy", name: "fairy" },
    { type: "poison", name: "poison" },
    { type: "flying", name: "flying" },
  ],
  tbody: [
    {
      type: "normal",
      name: "normal",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"immune"} name={"0"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "fire",
      name: "fire",
      data: [
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type="immune" name="0" />,
        "-",
        <Pill type="notEffective" name="1/2" />,
        <Pill type="notEffective" name="1/2" />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "water",
      name: "water",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"x2"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "grass",
      name: "grass",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"x2"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "electric",
      name: "electric",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"x2"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
    {
      type: "ice",
      name: "ice",
      data: [
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        <Pill type={"notEffective"} name={"1/2"} />,
        <Pill type={"notEffective"} name={"1/2"} />,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
      ],
    },
  ],
};

const useStyles = makeStyles({
  mainContainer: {
    fontFamily: "Helvetica",
    backgroundColor: theme.colors.fire,
    display: "flex",
    height: "100vh",
    flexDirection: "column",
  },
  main: {
    width: "80%",
    margin: "auto",
    backgroundColor: "transparent",
  },
  header: {
    backgroundColor: theme.colors.black,
  },
  footer: {
    backgroundColor: "black",
  },
});

export default function Main() {
  const [list, setList] = useState();
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [pokemonId, setPokemonId] = useState();
  const [pokemonData, setPokemonData] = useState();
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    getPokemonsByBoundaries(limit, offset).then((data) => setList(data));
  }, [limit, offset]);
  // useEffect(() => {
  //   getPokemon(pokemonId).then((data) => setPokemonData(data));
  // }, [pokemonId]);
  const classes = useStyles();

  const renderModal = () => (
    <Modal
      children={<Pokemon id={pokemonId} />}
      handleClickClose={(e) => {
        setOpenModal(!openModal);
      }}
    />
  );
  return list ? (
    <div className={classes.mainContainer}>
      <header className={classes.header}>
        <FilterNav
          regionList={[
            {
              text: "kanto",
              handleClickRegion: (region) => {
                setLimit(REGIONS[region].limit);
                setOffset(REGIONS[region].offset);
              },
            },
            {
              text: "jhotto",
              handleClickRegion: (region) => {
                setLimit(REGIONS[region].limit);
                setOffset(REGIONS[region].offset);
              },
            },
            {
              text: "hoenn",
              handleClickRegion: (region) => {
                setLimit(REGIONS[region].limit);
                setOffset(REGIONS[region].offset);
              },
            },
            {
              text: "teselia",
              handleClickRegion: (region) => {
                setLimit(REGIONS[region].limit);
                setOffset(REGIONS[region].offset);
              },
            },
            {
              text: "kalos",
              handleClickRegion: (region) => {
                setLimit(REGIONS[region].limit);
                setOffset(REGIONS[region].offset);
              },
            },
            {
              text: "alola",
              handleClickRegion: (region) => {
                setLimit(REGIONS[region].limit);
                setOffset(REGIONS[region].offset);
              },
            },
          ]}
        />
      </header>
      <main className={classes.main}>
        <PokemonGrid
          pokemonList={list}
          handleShowInfo={(id) => {
            setPokemonId(id);
            setOpenModal(!openModal);
          }}
        />
      </main>
      <Footer />
      {openModal === true ? renderModal() : null}
    </div>
  ) : (
    <>
      <h1>Loading</h1>
    </>
  );
}
