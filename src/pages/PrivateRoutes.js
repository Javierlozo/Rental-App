import React from "react";
import { Router } from "@reach/router";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import NavBar from "../components/NavBar";
import DashBoard from "../components/DashBoard";
import NavBarLogout from "../components/NavBarLogout";

const PrivateRoutes = ({ signOut }) => {
  return (
    <div className="App">
      <div>
        <NavBarLogout signOut={signOut} />
        <Router>
          <DashBoard path="/dashboard" />
          <NotFound default />
        </Router>
      </div>
    </div>
  );
};

export default PrivateRoutes;
