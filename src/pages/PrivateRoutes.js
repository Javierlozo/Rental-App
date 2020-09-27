import React from "react";
import { Router } from "@reach/router";
import NotFound from "../components/NotFound";
import NavBarLogout from "../components/NavBarLogout";
import PublicRoutes from "../pages/PublicRoutes";
import Home from "../components/Home";
import Cards from "../components/Cards";
import SurfStepper from "../components/SurfBoards/SurfStepper";
import ProfilePic from "../components/ProfileDashboard";
import SurfDashBoardPublic from "../components/SurfDashBoardPublic";
import MyItems from "../components/MyItems";

const PrivateRoutes = ({ signOut }) => {
  return (
    <div className="App">
      <div>
        <NavBarLogout signOut={signOut} />
        <Router>
          <Home path="/" />
          <SurfDashBoardPublic path="/surfdashboardpublic" />
          <MyItems path="/myitems" />
          <SurfStepper path="/surfstepper" />
          <ProfilePic path="/profiledashboard" />
        </Router>
      </div>
    </div>
  );
};

export default PrivateRoutes;
