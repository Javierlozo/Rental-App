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
// import img from "../images/Bike1.jpg";
// import imgb from "../images/SignUp2.jpg";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import EmailIcon from "@material-ui/icons/Email";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";
// import { Link as RouteLink } from "@reach/router";
// import { Auth } from "aws-amplify";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";

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
//   stepperRoot: {
//     width: "100%",
//   },
//   stepperBackButton: {
//     marginRight: theme.spacing(1),
//   },
//   stepperInstructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

// function getSteps() {
//   return ["Create Username and Password'", "Confirm Sign Up"];
// }

// function getStepContent(stepIndex, signUpForm, setSignUpForm) {
//   switch (stepIndex) {
//     case 0:
//     //   return (
//     //     <SetUsername signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
//     //   );
//     case 1:
//     //   return (
//     //     <ConfirmSignUp signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
//     //   );
//     default:
//       return "Unknown stepIndex";
//   }
// }

// export default function SignUp() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();
//   const [signUpForm, setSignUpForm] = React.useState({
//     username: "",
//     password: "",
//     // confirmationCode: "",
//   });
//   console.log(signUpForm);

//   const [signUpUser, setSignUpUser] = React.useState(undefined);
//   console.log("signed up user", signUpUser);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleCreateUser = () => {
//     try {
//       async function signUp() {
//         const user = await Auth.signUp({
//           username: signUpForm.username,
//           password: signUpForm.password,
//           attributes: {
//             email: signUpForm.username,
//           },
//         });
//         setSignUpUser(user);
//       }
//       signUp();
//       handleNext();
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
//         <div className={classes.stepperRoot}>
//           <Stepper activeStep={activeStep} alternativeLabel>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           <div>
//             {activeStep === steps.length ? (
//               <div>
//                 <Typography className={classes.stepperInstructions}>
//                   All steps completed
//                 </Typography>
//                 {/* <Button onClick={handleReset}>Reset</Button> */}
//               </div>
//             ) : (
//               <div>
//                 <Typography className={classes.stepperInstructions}>
//                   {getStepContent(activeStep)}
//                 </Typography>
//                 <div>
//                   <Button
//                     disabled={activeStep === 0}
//                     onClick={handleBack}
//                     className={classes.backButton}
//                   >
//                     Back
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleNext}
//                   >
//                     {activeStep === steps.length - 1 ? "Finish" : "Next"}
//                   </Button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <DirectionsBikeIcon fontSize="medium" />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Create User
//           </Typography>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               {/* <TextField
//                   autoComplete="fname"
//                   name="firstName"
//                   variant="standard"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   color="secondary"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   variant="standard"
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   color="secondary"
//                   autoComplete="lname"
//                 /> */}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 onChange={(e) =>
//                   setSignUpForm({ ...signUpForm, username: e.target.value })
//                 }
//                 variant="filled"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 color="secondary"
//                 autoComplete="email"
//                 value={signUpForm.username}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <EmailIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 onChange={(e) =>
//                   setSignUpForm({ ...signUpForm, password: e.target.value })
//                 }
//                 variant="filled"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 color="secondary"
//                 autoComplete="current-password"
//                 value={signUpForm.password}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <VpnKeyIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             className={classes.submit}
//             onClick={handleCreateUser}
//           >
//             Sign Up
//           </Button>
//           <Grid container>
//             <Grid item>
//               <Link href="/login" variant="body2">
//                 {"Already have an account? Log In"}
//               </Link>
//             </Grid>
//           </Grid>
//         </div>
//         {/* Steper */}
//       </Grid>
//     </Grid>
//   );
// }
