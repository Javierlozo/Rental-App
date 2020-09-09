import React from "react";
import { Router } from "@reach/router";
import LogIn from "../components/LogIn";
import NotFound from "../components/NotFound";
import SignUp from "../components/SignUp";

const PublicRoutes = ({ LogIn }) => {
  return (
    <Router>
      <LogIn path="/" LogIn={LogIn} />
      <SignUp path="/signup" />
      <NotFound default />
    </Router>
  );
};

export default PublicRoutes;
