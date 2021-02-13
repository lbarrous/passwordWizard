import React from "react";
import { useSelector } from "react-redux";
import ButtonsFooter from "../components/ButtonsGroup/ButtonsGroup";
import StepProgressBar from "../components/ProgressBar/ProgressBar";
import { AppState } from "../store/reducers/rootReducer";
import { Step, StepValues } from "../store/types.d";
import "../styles/base.scss";
import FormStep from "../views/Form/FormStep";
import ProductInformationStep from "../views/ProductInformation/ProductInformationStep";

export const PasswordWizardContainer = () => {
  const { currentStep }: { currentStep: Step } = useSelector(
    (state: AppState) => state.step
  );

  const StepMapping = {
    [StepValues.STEP1]: () => <ProductInformationStep />,
    [StepValues.STEP2]: () => <FormStep/>,
    [StepValues.STEP3]: () => <div>Step3</div>
  };

  return (
    <div className={"PasswordWizardContainer"}>
      <StepProgressBar />
      <div className="arrow"></div>
      {StepMapping[currentStep]()}
      <ButtonsFooter/>
    </div>
  );
};
