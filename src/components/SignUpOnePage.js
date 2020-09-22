import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import img from "../images/Bike1.jpg";
import imgb from "../images/SignUp2.jpg";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Auth } from "aws-amplify";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import { navigate } from "@reach/router";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "160px",
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "brown",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "grey",
  },
  back: {
    backgroundImage: `url(${imgb})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "left",
  },
}));

export default function SignUpOnePage() {
  const classes = useStyles();

  const [signUpForm, setSignUpForm] = React.useState({
    username: "",
    password: "",
    confirmationCode: "",
  });
  console.log(signUpForm);

  const [signUpUser, setSignUpUser] = React.useState(undefined);
  console.log("signed up user", signUpUser);

  const handleCreateUser = () => {
    try {
      async function signUp() {
        const user = await Auth.signUp({
          username: signUpForm.username,
          password: signUpForm.password,
          attributes: {
            email: signUpForm.username,
          },
        });
        setSignUpUser(user);
      }
      signUp();
    } catch (error) {
      console.log(error);
    }
  };

  async function handleConfirmUser() {
    async function uploadToSql() {
      console.log("upload to mysql");
      return await axios({
        method: "post",
        url: "https://0y5ptr8ar4.execute-api.us-east-1.amazonaws.com/dev/user",
        data: {
          username: signUpForm.username,
          firstName: signUpForm.firstName,
          lastName: signUpForm.lastName,
        },
      });
    }
    try {
      const response = await Auth.confirmSignUp(
        signUpForm.username,
        signUpForm.confirmationCode
      );
      if (response === "SUCCESS") {
        uploadToSql();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        className={classes.back}
        component={Paper}
        elevation={6}
        square
      >
        {/* Step 1/2 */}
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <DirectionsBikeIcon fontSize="medium" />
          </Avatar>
          <Typography component="h1" variant="h5">
            <h4>Step 1/2: Enter Email Address and Password!</h4>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) =>
                  setSignUpForm({ ...signUpForm, firstName: e.target.value })
                }
                autoComplete="fname"
                name="firstName"
                variant="standard"
                required
                fullWidth
                id="firstName"
                label="First Name"
                color="secondary"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) =>
                  setSignUpForm({ ...signUpForm, lastName: e.target.value })
                }
                variant="standard"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                color="secondary"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) =>
                  setSignUpForm({ ...signUpForm, username: e.target.value })
                }
                variant="filled"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                color="secondary"
                autoComplete="email"
                value={signUpForm.username}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) =>
                  setSignUpForm({ ...signUpForm, password: e.target.value })
                }
                variant="filled"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                color="secondary"
                autoComplete="current-password"
                value={signUpForm.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleCreateUser}
          >
            Send Confirmation Code
          </Button>
        </div>
        {/* Step 2/2 */}
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <h4>Step 2/2: Enter Confirmation Code</h4>
            <h6>
              Enter your confirmation code sent to the email address provided!
            </h6>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) =>
                  setSignUpForm({
                    ...signUpForm,
                    confirmationCode: e.target.value,
                  })
                }
                variant="filled"
                required
                fullWidth
                name="confirmation code"
                label="Confirmation Code"
                type="password"
                id="password"
                color="secondary"
                autoComplete="current-password"
                value={signUpForm.confirmationCode}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ConfirmationNumberIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleConfirmUser}
          >
            Confirm User
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Log In"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
