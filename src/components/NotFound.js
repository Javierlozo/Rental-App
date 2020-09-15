import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import img from "../images/Notfound.jpg";

const useStyles = makeStyles((theme) => ({
  home: {
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <img src={img} alt="Not Found" height="100%" />
    </div>
  );
}
