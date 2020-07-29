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
    width: "30rem",
    backgroundColor: theme.colors.background,
  },
  topWrapper: {
    height: "7rem",
    padding: theme.padding["x-axis"].large,
    width: "100%",
    margin: "auto",
    // border: "1px solid black",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: theme.colors.white,
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
    height: "1.5rem",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  types: {
    display: "inherit",
    alignItems: "center",
  },
  bottomInfo: {
    width: "30%",
    height: "3rem",
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "40rem",
  },

  text: {
    padding: theme.padding.medium,
    color: "#292929",
  },
  description: {
    height: "5rem",
    width: "100%",
  },
  name: {
    fontSize: theme.fontSize.large,
    textTransform: "uppercase",
  },
});

export default function BasicInfo({
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
    <div className={classes.wrapper}>
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
          </div>
        </div>
        {/* <div className={classes.description}>
        <p className={classes.text}>{description}</p>
      </div> */}
      </div>
    </div>
  );
}
