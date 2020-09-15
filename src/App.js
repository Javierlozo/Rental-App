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
        <PublicRoutes
          signIn={signIn}
          setSignInForm={setSignInForm}
          signInForm={signInForm}
        />
      </div>
    );
  }
  return <PrivateRoutes signOut={signOut} />;
}

export default App;

// function App() {
//   const [signedInUser, setSignedInUser] = useState(undefined);
//   const [signInForm, setSignInForm] = useState({
//     username: "",
//     password: "",
//   });
//   console.log(signInForm);

//   function signOut() {
//     try {
//       Auth.signOut({ global: true }).then(() => setSignedInUser(undefined));
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function signIn() {
//     console.log(signInForm);
//     try {
//       const user = await Auth.signIn(signInForm.username, signInForm.password);
//       setSignedInUser(user);
//       console.log(await Auth.currentAuthenticatedUser());
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     (async () => {
//       const user = await Auth.currentAuthenticatedUser();
//       setSignedInUser(user);
//     })();
//   }, []);

//   return (
//     <div className="App">
//       {signedInUser ? (
//         <button onClick={signOut}>Logout</button>
//       ) : (
//         <div>
//           <input
//             onChange={(e) =>
//               setSignInForm({ ...signInForm, username: e.target.value })
//             }
//           />
//           <input
//             type="password"
//             onChange={(e) =>
//               setSignInForm({ ...signInForm, password: e.target.value })
//             }
//           />
//           <button onClick={signIn}>Log In</button>
//         </div>
//       )}
//     </div>
//   );
// }
// export default App;
