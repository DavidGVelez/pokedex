import React from "react";
import RegionBar from "../molecules/RegionBar";
import Search from "../atoms/Search";
import { theme } from "../../theme";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  filterWrapper: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    padding: "2rem 0",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    "&> input": {
      align: "center",
    },
  },
});

export default function FilterNav({ regionList }) {
  const classes = useStyles();

  return (
    <div className={classes.filterWrapper}>
      <RegionBar {...{ regionList }} />
      <Search />
    </div>
  );
}
