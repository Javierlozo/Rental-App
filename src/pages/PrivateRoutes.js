import React from "react";
import { Router } from "@reach/router";
import NotFound from "../components/NotFound";
import DashBoard from "../components/DashBoard";
import NavBarLogout from "../components/NavBarLogout";
import PublicRoutes from "../pages/PublicRoutes";
import Home from "../components/Home";
import Cards from "../components/Cards";

const PrivateRoutes = ({ signOut }) => {
  return (
    <div className="App">
      <div>
        <NavBarLogout signOut={signOut} />
        <Router>
          <Home path="/" />
          <DashBoard path="/dashboard" />
        </Router>
      </div>
    </div>
  );
};

export default PrivateRoutes;
