import React from "react";
import { Link } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import AccessibilityNewRoundedIcon from "@material-ui/icons/AccessibilityNewRounded";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SignInPage from "./SignInPage";
import SignUp from "./SignUp";
import img from "../images/Logo.png";

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
}));

export default function NavBarLogout({ signOut }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          color: "Wheat",
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            className={classes.title}
            style={{
              display: "center",
            }}
          >
            <div>
              <Link to="/">
                <img src={img} height="120px"></img>
              </Link>
            </div>
          </Typography>
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
              color="inherit"
            >
              <button onClick={signOut}>Logout</button>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
