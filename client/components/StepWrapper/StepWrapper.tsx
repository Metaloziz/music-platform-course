import React, {FC} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputsTrackData
  from "../../pages/tracks/create/steps/InputsTrackData/InputsTrackData";
import FileUpload from "../../pages/tracks/create/steps/FileUpload/FileUpload";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '70%',
      marginTop: '100px',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

const steps = ['Information about track', 'Download picture', 'Download track'];

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <InputsTrackData/>;
    case 1:
      return <FileUpload file={''} setFile={() => ({})}/>;
    case 2:
      return <h1>This is the bit I really care about!</h1>;
    default:
      return <h1>Unknown step</h1>;
  }
}

const StepWrapper: FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography
              className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StepWrapper;