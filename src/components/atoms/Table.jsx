import React from "react";
import Pill from "../atoms/Pill";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  table: {
    width: "80%",
  },
  theadTop: {
    width: "0",
    "&>div": {
      margin: "0",
      width: "auto",
    },
    "&>div > span": {
      writingMode: "vertical-rl",
      textOrientation: "mixed",
      height: "5rem",
    },
  },
  tbody: {
    "&tr > th > div": {
      margin: 0,
    },
    "&tr > div": {
      margin: 0,
      width: "auto",
    },
    "&>div > span": {
      margin: "0",
    },
  },
  td: {
    textAlign: "center",
    padding: 0,
    "& > div": {
      margin: 0,
      padding: 0,
    },
  },
  th: {
    "& > div": {
      margin: 0,
    },
  },
});

export default function Table({ thead, tbody }) {
  const classes = useStyles();

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th></th>
          {thead.map((item) => (
            <th className={classes.theadTop}>
              <Pill {...item} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={classes.tbody}>
        {tbody.map((row) => (
          <tr>
            <th className={classes.th}>
              <Pill type={row.type} name={row.name} />
            </th>
            {row.data.map((type) => (
              <td className={classes.td}>{type}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
