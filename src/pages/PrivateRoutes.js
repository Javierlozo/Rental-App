import React from "react";
import { Router } from "@reach/router";
import NotFound from "../components/NotFound";
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
