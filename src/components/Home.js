import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import img from "../images/Kayak.jpg";

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "70vh",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    // margin: "-70px",
  },
}));

export default function Home() {
  const classes = useStyles();
  return <div className={classes.home}></div>;
}
