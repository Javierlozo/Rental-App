import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SurfInfo from "./SurfInfo";
import SurfPics from "./SurfPics";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { navigate } from "@reach/router";
import { Storage } from "aws-amplify";

const Styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    marginTop: "160px",
    width: "100%",
  },
  backButton: {
    alignContent: "center",
  },
  instructions: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));

function getSteps() {
  return ["Add More Information", "Upload an Image"];
}

function getStepContent(stepIndex, addForm, setAddForm, signUpForm) {
  switch (stepIndex) {
    case 0:
      return <SurfInfo addForm={addForm} setAddForm={setAddForm} />;
    case 1:
      return (
        <SurfPics
          addForm={addForm}
          setAddForm={setAddForm}
          signUpForm={signUpForm}
        />
      );
    default:
      return "Unknown stepIndex";
  }
}

export default function SurfStepper() {
  const classes = Styles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [addForm, setAddForm] = React.useState({
    username: "",
    title: "",
    description: "",
    rentcost: "",
    s3uuid: undefined,
    date: "",
  });
  console.log(addForm);

  function renderButton() {
    if (activeStep === steps.length - 1) {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={handleUploadCard}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            width: "100%",
          }}
        >
          Confirm
        </Button>
      );
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            width: "100%",
          }}
        >
          Next
        </Button>
      );
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  async function handleUploadCard({ signUpForm }) {
    async function uploadToSql(uuid) {
      console.log("upload to mysql");
      return await axios({
        method: "post",
        url:
          "https://0y5ptr8ar4.execute-api.us-east-1.amazonaws.com/dev/surfboardcard",
        data: {
          username: signUpForm.username,
          title: addForm.title,
          description: addForm.description,
          rentcost: addForm.rentcost,
          s3uuid: uuid,
        },
      });
    }
    try {
      const myUuid = uuid();
      Storage.put(
        `${signUpForm.username}/profilepics/${myUuid}.png`,
        // `profilepics/${myUuid}.png`,
        addForm.s3uuid,
        {
          contentType: "image/png",
        }
      )
        .then((result) => console.log(result))
        .then(() => uploadToSql(myUuid))
        .then(() => navigate("/surfdashboard"))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, addForm, setAddForm)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                  width: "100%",
                }}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUploadCard}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    alignContent: "center",
                    width: "100%",
                  }}
                >
                  Create Card
                </Button>
              ) : (
                renderButton()
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
