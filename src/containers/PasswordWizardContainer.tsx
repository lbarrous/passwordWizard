import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import ButtonsGroup from "../components/ButtonsGroup/ButtonsGroup";
import StepProgressBar from "../components/ProgressBar/ProgressBar";
import { TriangleStep } from "../components/TriangleStep/TriangleStep";
import { AppState } from "../store/reducers/rootReducer";
import { PasswordState, StepState, StepValues } from "../store/types.d";
import "../styles/base.scss";
import { getProgressStepByStepValue } from "../utils";
import FeedbackStep from "../views/Feedback/FeedbackStep";
import FormStep from "../views/Form/FormStep";
import ProductInformationStep from "../views/ProductInformation/ProductInformationStep";

export const PasswordWizardContainer = () => {
  const { currentStep }: StepState = useSelector(
    (state: AppState) => state.step
  );
  const { password }: PasswordState = useSelector(
    (state: AppState) => state.password
  );

  const getStepValidation = useMemo(() => {
    const progressStep = getProgressStepByStepValue(currentStep);
    let stepIsValidated;
    if (currentStep === StepValues.STEP2) {
      stepIsValidated =
        (progressStep &&
          progressStep.validator &&
          progressStep.validator(
            password.pass,
            password.confirmation_pass,
            password.hint
          )) as boolean;
    } else {
      stepIsValidated =
        (progressStep && progressStep.validator && progressStep.validator()) ||
        true;
    }
    return stepIsValidated;
  }, [currentStep, password]);

  const StepMapping = {
    [StepValues.STEP1]: () => <ProductInformationStep />,
    [StepValues.STEP2]: () => <FormStep />,
    [StepValues.STEP3]: () => <FeedbackStep />
  };

  return (
    <div className={"PasswordWizardContainer"}>
      <StepProgressBar />
      <TriangleStep />
      {StepMapping[currentStep]()}
      <ButtonsGroup stepsValidated={getStepValidation} />
    </div>
  );
};
