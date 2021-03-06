import React from "react";
import { Link } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccessibilityNewRoundedIcon from "@material-ui/icons/AccessibilityNewRounded";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import img from "../images/Logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icons: {
    fontSize: 35,
    color: "grey",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [signedInUser, setSignedInUser] = React.useState(false);
  // const [login, setLogInOpen] = React.useState(false);
  const open = Boolean(anchorEl);

  // const signInOpen = () => {
  //   setSignedInUser(true);
  // };

  // const logInOpen = () => {
  //   setLogInOpen(true);
  // };

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // if (!signedInUser) {
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "white",
          color: "Wheat",
        }}
      >
        <Toolbar>
          <div
            style={{
              alignItems: "right",
              display: "flex",
              flexDirection: "row",
              paddingLeft: "15px",
            }}
          >
            <FacebookIcon className={classes.icons} />
            <hr></hr>
            <TwitterIcon className={classes.icons} />
            <hr></hr>
            <InstagramIcon className={classes.icons} />
          </div>
          <Typography
            variant="h4"
            className={classes.title}
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <Link to="/Rental-App">
                <img src={img} alt="Kayak" height="150px"></img>
              </Link>
            </div>
          </Typography>
          {/* {auth && ( */}
          <div>
            <IconButton
              style={{
                marginRight: "20px",
                paddingLeft: "20px",
                backgroundColor: "grey",
                borderRadius: "30px",
                width: "90px",
                height: "50px",
              }}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon
                style={{
                  width: "30px",
                  height: "20px",
                }}
              />
              <AccessibilityNewRoundedIcon
                style={{
                  fontSize: 30,
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <MenuItem onClick={handleClose}>Log In</MenuItem>
              </Link>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>Sign Up</MenuItem>
              </Link>
              {/* <hr></hr>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>Add a Rental</MenuItem>
              </Link> */}
            </Menu>
          </div>
          {/* )} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
// return (
//   <div className={classes.root}>
//     <AppBar
//       position="static"
//       style={{
//         backgroundColor: "white",
//         color: "Wheat",
//       }}
//     >
//       <Toolbar>
//         <Typography
//           variant="h4"
//           className={classes.title}
//           style={{
//             display: "center",
//           }}
//         >
//           <div>
//             <Link to="/">
//               <img src={img} alt="Kayak" height="120px"></img>
//             </Link>
//           </div>
//         </Typography>
//         {/* {auth && ( */}
//         <div>
//           <IconButton
//             style={{
//               marginRight: "20px",
//               paddingLeft: "20px",
//               backgroundColor: "grey",
//               borderRadius: "30px",
//               width: "90px",
//               height: "50px",
//             }}
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleMenu}
//             color="inherit"
//           >
//             <MenuIcon
//               style={{
//                 width: "30px",
//                 height: "20px",
//               }}
//             />
//             <AccessibilityNewRoundedIcon
//               style={{
//                 fontSize: 30,
//               }}
//             />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left",
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             open={open}
//             onClose={handleClose}
//           >
//             <Link
//               to="/login"
//               style={{
//                 textDecoration: "none",
//                 color: "black",
//               }}
//             >
//               <MenuItem onClick={signInOpen}>Profile</MenuItem>
//             </Link>
//             <Link
//               to="/signup"
//               style={{ textDecoration: "none", color: "black" }}
//             >
//               <MenuItem onClick={handleClose}>Messages</MenuItem>
//             </Link>
//             <hr></hr>
//             <Link
//               to="/signup"
//               style={{ textDecoration: "none", color: "black" }}
//             >
//               <MenuItem onClick={handleClose}>Log Out</MenuItem>
//             </Link>
//           </Menu>
//         </div>
//         {/* )} */}
//       </Toolbar>
//     </AppBar>
//   </div>
// );
// }

// import React from "react";
// import { Link } from "@reach/router";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import AccessibilityNewRoundedIcon from "@material-ui/icons/AccessibilityNewRounded";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import img from "../images/Logo.png";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function NavBar({ signOut }) {
//   const classes = useStyles();
//   // const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   // const [signup, setSignUpOpen] = React.useState(false);
//   // const [login, setLogInOpen] = React.useState(false);
//   const open = Boolean(anchorEl);

//   // const signUpOpen = () => {
//   //   setSignUpOpen(true);
//   // };

//   // const logInOpen = () => {
//   //   setLogInOpen(true);
//   // };

//   // const handleChange = (event) => {
//   //   setAuth(event.target.checked);
//   // };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar
//         position="static"
//         style={{
//           backgroundColor: "white",
//           color: "Wheat",
//         }}
//       >
//         <Toolbar>
//           <Typography
//             variant="h4"
//             className={classes.title}
//             style={{
//               display: "center",
//             }}
//           >
//             <div>
//               <Link to="/">
//                 <img src={img} alt="Kayak" height="120px"></img>
//               </Link>
//             </div>
//           </Typography>
//           {/* {auth && ( */}
//           <div>
//             <IconButton
//               style={{
//                 marginRight: "20px",
//                 paddingLeft: "20px",
//                 backgroundColor: "green",
//                 borderRadius: "30px",
//                 width: "90px",
//                 height: "50px",
//               }}
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleMenu}
//               color="inherit"
//             >
//               <MenuIcon
//                 style={{
//                   width: "30px",
//                   height: "20px",
//                 }}
//               />
//               <AccessibilityNewRoundedIcon
//                 style={{
//                   fontSize: 30,
//                 }}
//               />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={open}
//               onClose={handleClose}
//             >
//               <Link
//                 to="/login"
//                 style={{
//                   textDecoration: "none",
//                   color: "black",
//                 }}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//               </Link>
//               <Link
//                 to="/signup"
//                 style={{ textDecoration: "none", color: "black" }}
//               >
//                 <MenuItem onClick={handleClose}>Messages</MenuItem>
//               </Link>
//               <hr></hr>
//               <Link
//                 to="/signup"
//                 style={{ textDecoration: "none", color: "black" }}
//               >
//                 <MenuItem onClick={signOut}>Sign Out</MenuItem>
//               </Link>
//             </Menu>
//           </div>
//           {/* )} */}
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
