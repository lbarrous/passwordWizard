import { ProgressStep } from "./components/ProgressBar/models/index";
import { StepValues } from "./store/types.d";
import { validateFormStep } from "./utils";

export const wizardSteps: ProgressStep[] = [
  {
    stepId: StepValues.STEP1,
    label: "1"
  },
  {
    stepId: StepValues.STEP2,
    label: "2",
    validator: validateFormStep
  },
  {
    stepId: StepValues.STEP3,
    label: "3"
  }
];

export const MIN_NUMBER_OF_STEPS = 0;
export const MAX_NUMBER_OF_STEPS = wizardSteps.length - 1;
export const PASSWORD_MIN_LENGTH = 8;
