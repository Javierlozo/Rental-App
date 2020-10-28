import React from "react";
import { Router } from "@reach/router";
import NavBarLogout from "../components/NavBarLogout";
import Home from "../components/Home";
import SurfStepper from "../components/SurfStepper/SurfStepper";
import ProfilePic from "../components/ProfileDashboard";
import SurfDashBoardPublic from "../components/SurfDashBoardPublic";
import KayakDashBoardPublic from "../components/KayakDashBoardPublic";
import MyItems from "../components/MyItems";

const PrivateRoutes = ({ signOut }) => {
  return (
    <div className="App">
      <div>
        <NavBarLogout signOut={signOut} />
        <Router>
          <Home path="/" />
          <SurfDashBoardPublic path="/surfdashboardpublic" />
          <KayakDashBoardPublic path="/kayakdashboardpublic" />
          <MyItems path="/myitems" />
          <SurfStepper path="/surfstepper" />
          <ProfilePic path="/profiledashboard" />
        </Router>
      </div>
    </div>
  );
};

export default PrivateRoutes;
