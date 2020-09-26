import React from "react";
import { Router } from "@reach/router";
import NotFound from "../components/NotFound";
import SurfDashBoard from "../components/SurfDashBoard";
import NavBarLogout from "../components/NavBarLogout";
import PublicRoutes from "../pages/PublicRoutes";
import Home from "../components/Home";
import Cards from "../components/Cards";
import SurfStepper from "../components/SurfBoards/SurfStepper";
import ProfilePic from "../components/ProfileDashboard";

const PrivateRoutes = ({ signOut }) => {
  return (
    <div className="App">
      <div>
        <NavBarLogout signOut={signOut} />
        <Router>
          <Home path="/" />
          <SurfDashBoard path="/surfdashboard" />
          <SurfStepper path="/surfstepper" />
          <ProfilePic path="/profiledashboard" />
        </Router>
      </div>
    </div>
  );
};

export default PrivateRoutes;
