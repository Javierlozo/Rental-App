import React from "react";
import { Router } from "@reach/router";
import NotFound from "../components/NotFound";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Cards from "../components/Cards";

const PublicRoutes = ({ signIn, setSignInForm, signInForm }) => {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Router>
          <Home path="/" />
          <NotFound default />
        </Router>
        <Cards />
      </div>
    </div>
  );
};

export default PublicRoutes;
