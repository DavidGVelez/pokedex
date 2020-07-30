import React from "react";
import Pill from "../atoms/Pill";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({});

export default function Types({ types, name }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {types.map((type) => (
        <Pill type={type.type} name={type.name} />
      ))}
    </div>
  );
}
