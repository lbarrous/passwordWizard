import { wizardSteps } from './../constants';
import { Step, StepValues } from './../store/types.d';

const getStepFromNumber = (stepNumber: number) => Object.values(StepValues)[stepNumber];

const getTriangleCSSClassFromStep = (step: Step) => Object.keys(StepValues)[step].toString().toLowerCase();

const getProgressStepByStepValue = (currentStep: Step) => wizardSteps.find( step => step.stepId === currentStep) || null;

const validateFormStep = (password: string, repeatedPassword: string, hint: string) => {
    return (
      !(password.length === 0 && repeatedPassword.length === 0) &&
      (password === repeatedPassword && hint.length <= 255)
    );
  }

export { getStepFromNumber, getTriangleCSSClassFromStep, getProgressStepByStepValue, validateFormStep };

