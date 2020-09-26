import React from "react";
import { Router } from "@reach/router";
import NotFound from "../components/NotFound";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Cards from "../components/Cards";
import SignUpOnePage from "../components/SignUpOnePage";
import SignInPage from "../components/SignInPage";
import SurfDashBoard from "../components/SurfDashBoard";

const PublicRoutes = ({ signIn, setSignInForm, signInForm }) => {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Router>
          <Home path="/" />
          <SignInPage
            path="/login"
            signIn={signIn}
            setSignInForm={setSignInForm}
            signInForm={signInForm}
          />
          <SignUpOnePage path="/signup" />
          <SurfDashBoard path="/surfdashboard" />
          {/* <NotFound default /> */}
        </Router>
        {/* <Cards /> */}
      </div>
    </div>
  );
};

export default PublicRoutes;
