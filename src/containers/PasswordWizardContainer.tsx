import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/reducers/rootReducer";
import { StepValues, Step } from "../store/types.d";
import StepProgressBar from "../components/ProgressBar/ProgressBar";

export const PasswordWizardContainer = () => {
  const { currentStep }: { currentStep: Step } = useSelector((state: AppState) => state.step);

  const StepMapping = {
    [StepValues.STEP1]: () => (<StepProgressBar/>),
    [StepValues.STEP2]: () => (<div>Step2</div>),
    [StepValues.STEP3]: () => (<div>Step3</div>)
  };
  return StepMapping[currentStep]();

};
