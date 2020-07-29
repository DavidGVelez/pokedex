import React from "react";
import Pokedex from "./components/pages/Pokedex";
import { makeStyles } from "@material-ui/styles";
import "./reset.css";
import { theme } from "./theme";
const useStyles = makeStyles({
  container: {
    fontFamily: "Helvetica",
    backgroundColor: theme.colors.container,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Pokedex />
    </div>
  );
}

export default App;
