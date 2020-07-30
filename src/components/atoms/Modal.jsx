import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
  },
  modalMain: {
    position: "fixed",
    background: "white",
    width: "80%",
    height: "auto",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },

  displayBlock: {
    display: "block",
  },
  displayNone: {
    display: "none",
  },
});

export default function Modal({ handleClose, show, children }) {
  const classes = useStyles();
  const showHideClassName = show ? classes.displayBlock : classes.displayNone;
  return (
    <div className={`${classes.modal} ${showHideClassName}`}>
      <section className={classes.modalMain}>
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
}
