import React from "react";
import { Router } from "@reach/router";
import SignInPage from "../components/SignInPage";
import NotFound from "../components/NotFound";
import SignUp from "../components/SignUp";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Cards from "../components/Cards";

const PublicRoutesSecond = ({ signIn, setSignInForm, signInForm }) => {
  return (
    <div className="App">
      <div>
        <Router>
          <SignInPage
            path="/login"
            signIn={signIn}
            setSignInForm={setSignInForm}
            signInForm={signInForm}
          />
          <SignUp path="/signup" />
        </Router>
      </div>
    </div>
  );
};

export default PublicRoutesSecond;
