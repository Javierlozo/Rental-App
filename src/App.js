// import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Router, Link } from "@reach/router";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignInPage from "./components/SignInPage";
import Cards from "./components/Cards";
import DashBoard from "./components/DashBoard";
import PrivateRoutes from "./pages/PrivateRoutes";
import PublicRoutes from "./pages/PublicRoutes";
import PublicRoutesSecond from "./pages/PublicRoutes";
import NavBarLogout from "./components/NavBarLogout";

function App() {
  const [signedInUser, setSignedInUser] = useState(undefined);
  const [signInForm, setSignInForm] = useState({ username: "", password: "" });

  function signOut() {
    try {
      Auth.signOut({ global: true }).then(() => setSignedInUser(undefined));
    } catch (error) {
      console.log(error);
    }
  }

  async function signIn() {
    try {
      const user = await Auth.signIn(signInForm.username, signInForm.password);
      setSignedInUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      const user = await Auth.currentAuthenticatedUser();
      setSignedInUser(user);
    })();
  }, []);

  if (!signedInUser) {
    return (
      <div className="App">
        <Router>
          <PublicRoutes path="/" />
          <SignInPage
            path="login"
            signIn={signIn}
            setSignInForm={setSignInForm}
            signInForm={signInForm}
          />
          <SignUp path="signup" />
        </Router>
      </div>
    );
  }
  return <PrivateRoutes signOut={signOut} />;
}

export default App;
