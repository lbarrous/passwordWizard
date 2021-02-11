import { StepValues } from "./store/types.d";
import { ProgressStep } from "./components/ProgressBar/models/index";

export const wizardSteps: ProgressStep[] = [
  {
    stepId: StepValues.STEP1,
    label: "1"
  },
  {
    stepId: StepValues.STEP2,
    label: "2"
  },
  {
    stepId: StepValues.STEP3,
    label: "3"
  }
];
