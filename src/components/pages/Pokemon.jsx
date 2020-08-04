import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import PokemonHeader from "../organisms/PokemonHeader";
import Title from "../atoms/Title";
import BasicInfo from "../atoms/BasicInfo";
import { theme } from "../../theme";
const useStyles = makeStyles({
  container: {
    maxWidth: "600px",
    margin: "auto",
    backgroundColor: theme.colors.white,
  },
  infoWrapper: {
    padding: "1rem",
  },
});
export default function Pokemon({
  id,
  img,
  name,
  types,
  height,
  weight,
  stats = [],
  subname = "sampleSubname",
  flavour = "sampletext",
}) {
  const classes = useStyles();
  return id ? (
    <div className={classes.container}>
      <Title text={name} size="h1" />
      <div className={classes.infoWrapper}>
        <PokemonHeader
          {...{ img }}
          {...{ types }}
          {...{ stats }}
          {...{ subname }}
          {...{ flavour }}
        />
        <Title text={"Basic Info"} size="h3" />
        <BasicInfo {...{ height }} {...{ weight }} />
      </div>
    </div>
  ) : (
    <> </>
  );
}
