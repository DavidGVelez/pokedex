import React from "react";
import RegionButton from "../atoms/RegionButton";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";

const useStyles = makeStyles({
  regionList: {
    padding: 0,
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
    "&> li > button": {
      margin: theme.margin["y-axixs"].small,
      textTransform: "capitalize",
      fontSize: theme.fontSize.medium,
    },
  },
});

export default function RegionBar({ regionList }) {
  const classes = useStyles();

  return (
    <ul className={classes.regionList}>
      {regionList.map((item) => (
        <li>
          <RegionButton {...item} />
        </li>
      ))}
    </ul>
  );
}
