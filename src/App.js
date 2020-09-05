import React from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Cards from "./components/Cards";

function App() {
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
}

export default App;
