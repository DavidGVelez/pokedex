import React from "react";
import RegionBar from "../molecules/RegionBar";
import Search from "../atoms/Search";
import { theme } from "../../theme";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  filterWrapper: {
    backgroundColor: theme.colors.white,
    padding: theme.padding.small,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
