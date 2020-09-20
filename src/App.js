// import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Router } from "@reach/router";
import "./App.css";
import SignUpOnePage from "./components/SignUpOnePage";
import SignInPage from "./components/SignInPage";
import PrivateRoutes from "./pages/PrivateRoutes";
import PublicRoutes from "./pages/PublicRoutes";

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
            path="/login"
            signIn={signIn}
            setSignInForm={setSignInForm}
            signInForm={signInForm}
          />
          <SignUpOnePage path="/signup" />
        </Router>
      </div>
    );
  }
  return <PrivateRoutes signOut={signOut} />;
}

export default App;
