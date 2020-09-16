import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import img from "../images/Kayak.jpg";
import SignUp from "./Test/SignUpTest3";
import SignInPage from "./SignInPage";
import Cards from "../components/Cards";
import DashBoard from "../components/DashBoard";
import PrivateRoutes from "../pages/PrivateRoutes";
import PublicRoutes from "../pages/PublicRoutes";

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "80vh",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    // margin: "-70px",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      {/* <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video> */}
    </div>
  );
}
