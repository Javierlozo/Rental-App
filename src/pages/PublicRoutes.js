import React from "react";
import { Router } from "@reach/router";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import SignUpOnePage from "../components/SignUpOnePage";
import SignInPage from "../components/SignInPage";
import SurfDashBoardPublic from "../components/SurfDashBoardPublic";
import KayakDashBoardPublic from "../components/KayakDashBoardPublic";

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
          <SurfDashBoardPublic path="/surfdashboardpublic" />
          <KayakDashBoardPublic path="/kayakdashboardpublic" />
          {/* <NotFound default /> */}
        </Router>
        {/* <Cards /> */}
      </div>
    </div>
  );
};

export default PublicRoutes;
