import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Add More Information", "Upload Images"];
}

function getStepContent(stepIndex, addForm, setAddForm) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

export default function SurfStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [addForm, setAddForm] = React.useState({
    title: "",
    description: "",
    rentcost: "",
    s3uuid: undefined,
  });
  console.log(addForm);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  async function handleUploadCard() {
    async function uploadToSql(uuid) {
      console.log("upload to mysql");
      return await axios({
        method: "post",
        url:
          "https://0y5ptr8ar4.execute-api.us-east-1.amazonaws.com/dev/surfboard",
        data: {
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
        `${addForm.username}/profilepics/${myUuid}.png`,
        addForm.s3uuid,
        {
          contentType: "image/png",
        }
      )
        .then((result) => console.log(result))
        .then(() => uploadToSql(myUuid))
        .then(() => navigate("/"))
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
              {getStepContent(activeStep, addForm, setAddForm)}{" "}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUploadCard}
              >
                Generate Card
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
