import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../../theme";
import Types from "../molecules/Types";
const useStyles = makeStyles({
  card: {
    padding: theme.padding.large,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "60rem",
    height: "30rem",
    backgroundColor: theme.colors.white,
  },
  topWrapper: {
    height: "14rem",
    padding: theme.padding["x-axis"].large,
    width: "100%",
    margin: "auto",
    border: "1px solid black",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  sprite: {
    width: "100%",
    height: "100%",
  },
  portrait: {
    height: "100%",
    width: "14rem",
  },
  topInfo: {
    display: "flex",
    width: "100%",
    height: "3rem",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  types: {
    display: "inherit",
    height: "3rem",
    alignItems: "center",
  },
  bottomInfo: {
    width: "30%",
    height: "6rem",
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "40rem",
    backgroundColor: "white",
  },

  text: {
    padding: theme.padding.medium,
    fontFamily: "Roboto",
    color: "#292929",
  },
  description: {
    height: "10rem",
    width: "100%",
    backgroundColor: "white",
  },
  name: {
    fontSize: theme.fontSize.large,
    textTransform: "uppercase",
  },
});

export default function Entry({
  types,
  name,
  weight,
  height,
  id,
  url,
  alt,
  description,
}) {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.topWrapper}>
        <div className={classes.portrait}>
          <img className={classes.sprite} src={`${url}`} alt={alt} />
        </div>
        <div className={classes.infoWrapper}>
          <div className={classes.topInfo}>
            <div className={classes.name}>
              <span className={classes.text}>{`${id} - ${name}`}</span>
            </div>
          </div>
          <div className={classes.types}>{<Types types={types} />}</div>
          <div className={classes.bottomInfo}>
            <div className={classes.text}>{`Weight ${weight / 10} kg`}</div>
            <div className={classes.text}>{`Height ${height / 10} cm`}</div>
          </div>
        </div>
      </div>
      <div className={classes.description}>
        <p className={classes.text}>{description}</p>
      </div>
    </div>
  );
}
