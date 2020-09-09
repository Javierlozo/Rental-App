import React from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Cards from "./components/Cards";
import DashBoard from "./components/DashBoard";
import PrivateRoutes from "./pages/PrivateRoutes";
import PublicRoutes from "./pages/PublicRoutes";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Router>
          <Home path="/" />
          <SignUp path="/signup" />
          <LogIn path="/login" />
        </Router>
        <Cards />
        <DashBoard path="/dashboard" />
      </div>
    </div>
  );
}

export default App;
