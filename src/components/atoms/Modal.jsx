import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "./Button";
import { theme } from "../../theme";
const useStyles = makeStyles({
  modal: {
    margin: "auto",
    paddingTop: "2rem",
    position: "fixed",
    backgroundColor: "rgba(0,0,0,0.8)",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 3,
  },
  backButton: {
    width: "35px",
    padding: "2rem",
    filter: "contrast(100%)",
  },
  child: {
    width: "fit-content",
    margin: "auto",
  },
});

export default function Modal({ handleClickClose, children }) {
  const notClosingModal = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  const classes = useStyles();
  return (
    <div className={classes.modal} onClick={handleClickClose}>
      {/* <Button
          children={
            <img
              className={classes.backButton}
              src={process.env.PUBLIC_URL + "/left-arrow.png"}
              alt="arrow"
            ></img>
          }
          handleClick={handleClickClose}
        /> */}
      <section className={classes.child} onClick={(e) => notClosingModal(e)}>
        {children}
      </section>
    </div>
  );
}
