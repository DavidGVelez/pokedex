import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  row: {
    display: "flex",
    justifyContent: "space-around",
  },
});
//WIP
export default function Evolutions({ evolutions }) {
  const classes = useStyles();
  return (
    <div>
      {evolutions.forEach((pokemon) => (
        <div className={classes.row}>
          <img src={} alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      ))}
    </div>
  );
}
