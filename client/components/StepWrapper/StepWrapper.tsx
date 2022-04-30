import {FC, ReactNode} from 'react';
import {Card, Container} from "@mui/material";
import style from './StepWrapper.module.scss'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel'

type StepWrapperProps = {
  activeStep: number
  children?: ReactNode
}

const steps = ['first', 'second', 'third']

const StepWrapper: FC<StepWrapperProps> = ({activeStep, children}) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (<Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>)
        })}
      </Stepper>
      <div className={style.container}>
        <Card className={style.children}>
          {children}
        </Card>
      </div>
    </Container>
  );
};

export default StepWrapper
