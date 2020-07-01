import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
     
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['面談', '滞在先を決める','留学先の学校を紹介します','お見積もり', '料金のお支払い'];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return '留学までのステップ１　面談';
    case 1:
      return '留学までのステップ２　滞在先を決める';
    case 2:
      return '留学までのステップ３　留学先の学校を紹介します';
      case 3:
      return '留学までのステップ４　お見積もり';
      case 4:
        return '留学までのステップ５　料金のお支払い';
    default:
      return 'Unknown stepIndex';
  }
}

export default function StepperFnc() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

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
            <Typography className={classes.instructions}>留学の始まりです</Typography>
            <Button onClick={handleReset}>リセット</Button>
          </div>
        ) : (
          <div  style={{marginLeft:"3em",marginTop:"1em"}}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                戻る
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? '終わり' : '次'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}