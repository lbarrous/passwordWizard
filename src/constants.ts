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
