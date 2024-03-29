import {
  PASSWORD_MIN_LENGTH,
  secondaryColor,
  whiteColor,
  wizardSteps
} from "./../constants";
import { Step, StepValues, ValidationObject } from "./../store/types.d";

const getStepFromNumber = (stepNumber: number) =>
  Object.values(StepValues)[stepNumber];

const getProgressStepByStepValue = (currentStep: Step) =>
  wizardSteps.find(step => step.stepId === currentStep) || null;

const regexPasswordValidation = /^(?=.*[A-Z])(?=.*\d).*$/;

const validateFormStep = (
  password: string,
  repeatedPassword: string,
  hint: string
): ValidationObject => {
  let associatedErrors: string[] = [];
  if (!password.length || !repeatedPassword.length) {
    associatedErrors = associatedErrors.concat(["passwords_empty"]);
  }
  if (
    (password.length && !regexPasswordValidation.test(password)) ||
    (repeatedPassword.length && !regexPasswordValidation.test(repeatedPassword))
  ) {
    associatedErrors = associatedErrors.concat(["regex_failed"]);
  }
  if (password !== repeatedPassword) {
    associatedErrors = associatedErrors.concat(["passwords_not_equals"]);
  }
  if (
    (password.length && password.length < PASSWORD_MIN_LENGTH) ||
    (repeatedPassword.length && repeatedPassword.length < PASSWORD_MIN_LENGTH)
  ) {
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

const getButtonCSS = (isDisabled: boolean = false, isPrimary: boolean) => {
  if (!!isDisabled) {
    return `background-color: #cccccc; color: ${whiteColor};`;
  } else {
    return isPrimary
      ? `background-color: ${secondaryColor}; color: ${whiteColor};`
      : `background-color: ${whiteColor}; color: ${secondaryColor};`;
  }
};

export {
  getStepFromNumber,
  getProgressStepByStepValue,
  validateFormStep,
  isPasswordTooShort,
  getButtonCSS
};
