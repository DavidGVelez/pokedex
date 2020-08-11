import React from "react";
import Button from "../atoms/Button";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  regionList: {
    padding: 0,
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
    "&> li > button, &>li > a > button": {
      cursor: "pointer",
      padding: " 0 .5rem",
      margin: theme.margin["y-axixs"].small,
      textTransform: "capitalize",
      fontSize: theme.fontSize.medium,
    },
  },
});

export default function RegionBar({ regionList, handleClickRegion }) {
  const classes = useStyles();

  return (
    <ul className={classes.regionList}>
      {regionList.map((item) => (
        <li>
          <Button {...item} handleClick={item.handleClickRegion} />
        </li>
      ))}
      {/* <li>
        <Link to="/typeChart">
          <Button text={"Tipos"} />
        </Link>
      </li> */}
    </ul>
  );
}
