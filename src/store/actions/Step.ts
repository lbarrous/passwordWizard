export const NEXT_STEP = 'NEXT_STEP';
export const PREVIOUS_STEP = 'PREVIOUS_STEP';

interface NextStepActionType {
  type: typeof NEXT_STEP;
}
interface PreviousStepActionType {
  type: typeof PREVIOUS_STEP;
}

export type StepActionTypes = NextStepActionType | PreviousStepActionType;

/* Action creators */

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
