import React from "react";
import { Router } from "@reach/router";
import LogIn from "../components/LogIn";
import NotFound from "../components/NotFound";
import SignUp from "../components/SignUp";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Cards from "../components/Cards";

const PublicRoutes = () => {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Router>
          <Home path="/" />
          <SignUp path="/signup" component={SignUp} />
          <LogIn path="/login" component={LogIn} />
        </Router>
        <Cards />
      </div>
    </div>
  );
};

export default PublicRoutes;
