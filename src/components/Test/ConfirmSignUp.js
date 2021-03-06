// import React from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Paper from "@material-ui/core/Paper";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
// import img from "../../images/Bike1.jpg";
// import imgb from "../../images/SignUp2.jpg";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import EmailIcon from "@material-ui/icons/Email";
// import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
// import { Link as RouteLink } from "@reach/router";
// import { Auth } from "aws-amplify";
// import { navigate } from "@reach/router";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//   },
//   image: {
//     backgroundImage: `url(${img})`,
//     backgroundRepeat: "no-repeat",
//     backgroundColor:
//       theme.palette.type === "light"
//         ? theme.palette.grey[50]
//         : theme.palette.grey[900],
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: "brown",
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: "grey",
//   },
//   back: {
//     backgroundImage: `url(${imgb})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "left",
//   },
// }));

// export default function ConfirmationSignUp() {
//   const classes = useStyles();

//   const [signUpForm, setSignUpForm] = React.useState({
//     confirmationCode: "",
//   });
//   console.log(signUpForm);

//   const handleConfirmUser = () => {
//     try {
//       Auth.confirmSignUp(signUpForm.confirmationCode);
//       navigate("/login");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//       <Grid
//         item
//         xs={12}
//         sm={8}
//         md={5}
//         className={classes.back}
//         component={Paper}
//         elevation={6}
//         square
//       >
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <DirectionsBikeIcon fontSize="medium" />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             <h4>Step 2/2: Enter Confirmation Code</h4>
//             <h6>
//               Enter your confirmation code sent to the email address provided!
//             </h6>
//           </Typography>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}></Grid>
//             <Grid item xs={12}></Grid>
//             <Grid item xs={12}>
//               <TextField
//                 onChange={(e) =>
//                   setSignUpForm({
//                     ...signUpForm,
//                     confirmationCode: e.target.value,
//                   })
//                 }
//                 variant="filled"
//                 required
//                 fullWidth
//                 name="confirmation code"
//                 label="Confirmation Code"
//                 type="password"
//                 id="password"
//                 color="secondary"
//                 autoComplete="current-password"
//                 value={signUpForm.confirmationCode}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <ConfirmationNumberIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             fullWidth
//             variant="contained"
//             className={classes.submit}
//             onClick={handleConfirmUser}
//           >
//             Confirm User
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link href="/login" variant="body2">
//                 {"Already have an account? Log In"}
//               </Link>
//             </Grid>
//           </Grid>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }
