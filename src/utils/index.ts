import { PASSWORD_MIN_LENGTH, wizardSteps } from "./../constants";
import { Step, StepValues, ValidationObject } from "./../store/types.d";

const getStepFromNumber = (stepNumber: number) =>
  Object.values(StepValues)[stepNumber];

const getTriangleCSSClassFromStep = (step: Step) =>
  Object.keys(StepValues)
    [step].toString()
    .toLowerCase();

const getProgressStepByStepValue = (currentStep: Step) =>
  wizardSteps.find(step => step.stepId === currentStep) || null;

const validateFormStep = (
  password: string,
  repeatedPassword: string,
  hint: string
): ValidationObject => {
  let associatedErrors: string[] = [];
  if (!password.length || !repeatedPassword.length) {
    associatedErrors = associatedErrors.concat(["passwords_empty"]);
  }
  if (password !== repeatedPassword) {
    associatedErrors = associatedErrors.concat(["passwords_not_equals"]);
  }
  if ((password.length && password.length < PASSWORD_MIN_LENGTH) || (repeatedPassword.length && repeatedPassword.length < PASSWORD_MIN_LENGTH)) {
    associatedErrors = associatedErrors.concat(["password_not_min_length"]);
  }
  if (hint.length > 255) {
    associatedErrors = associatedErrors.concat(["hint_exceeds_length"]);
  }

  return {
    isValid: associatedErrors.length === 0,
    associatedErrors: associatedErrors
  };
};

const isPasswordTooShort = (password: string, minLength: number) =>
  password.length < minLength;

export { getStepFromNumber, getTriangleCSSClassFromStep, getProgressStepByStepValue, validateFormStep, isPasswordTooShort };

