export const NEXT_STEP = 'NEXT_STEP';
export const PREVIOUS_STEP = 'PREVIOUS_STEP';
export const IS_VALIDATED = 'IS_VALIDATED';

interface NextStepActionType {
  type: typeof NEXT_STEP;
}
interface PreviousStepActionType {
  type: typeof PREVIOUS_STEP;
}

interface IsValidatedActionType {
  type: typeof IS_VALIDATED;
  payload: boolean;
}

export const isSelectedType = (action: StepActionTypes): action is IsValidatedActionType => action.hasOwnProperty("payload")

export type StepActionTypes = NextStepActionType | PreviousStepActionType | IsValidatedActionType;

export const nextStep = (): StepActionTypes => {
  return {
    type: NEXT_STEP,
  };
};

export const previousStep = (): StepActionTypes => {
  return {
    type: PREVIOUS_STEP,
  };
};

export const validateStep = (isValidated: boolean): StepActionTypes => {
  return {
    type: IS_VALIDATED,
    payload: isValidated
  };
};
