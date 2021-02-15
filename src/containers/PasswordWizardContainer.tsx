import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ButtonsGroup from "../components/ButtonsGroup/ButtonsGroup";
import StepProgressBar from "../components/ProgressBar/ProgressBar";
import { TriangleStep } from "../components/TriangleStep/TriangleStep";
import { AppState } from "../store/reducers/rootReducer";
import { PasswordState, StepState, StepValues, ValidationObject } from "../store/types.d";
import "../styles/base.scss";
import { getProgressStepByStepValue } from "../utils";
import FeedbackStep from "../views/Feedback/FeedbackStep";
import FormStep from "../views/Form/FormStep";
import ProductInformationStep from "../views/ProductInformation/ProductInformationStep";

const Container = styled.div`
background-color: #f3eded;
padding: 2rem;
`;
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
          )) as ValidationObject;
    } else {
      stepIsValidated =
        (progressStep && progressStep.validator && progressStep.validator()) ||
        {
          isValid: true
        };
    }
    return stepIsValidated;
  }, [currentStep, password]);

  const StepMapping = {
    [StepValues.STEP1]: () => <ProductInformationStep />,
    [StepValues.STEP2]: () => <FormStep validationObject={getStepValidation}/>,
    [StepValues.STEP3]: () => <FeedbackStep />
  };

  return (
    <Container>
      <StepProgressBar />
      <TriangleStep />
      {StepMapping[currentStep]()}
      <ButtonsGroup stepsValidated={getStepValidation.isValid} />
    </Container>
  );
};
