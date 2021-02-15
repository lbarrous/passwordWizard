import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import img_key from "../assets/img/key_openbank.png";
import logo from "../assets/img/logo_openbank.png";
import ButtonsGroup from "../components/ButtonsGroup/ButtonsGroup";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import StepProgressBar from "../components/ProgressBar/ProgressBar";
import { TriangleStep } from "../components/TriangleStep/TriangleStep";
import { AppState } from "../store/reducers/rootReducer";
import { PasswordState, StepState, StepValues, ValidationObject } from "../store/types.d";
import "../styles/base.scss";
import { getProgressStepByStepValue } from "../utils";
import FeedbackStep from "../views/Feedback/FeedbackStep";
import FormStep from "../views/Form/FormStep";
import ProductInformationStep from "../views/ProductInformation/ProductInformationStep";
import { Container, Key, Logo } from "./styles";

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
      <Logo src={logo} alt="logo" />
      <Key src={img_key} alt="key" />
      <TriangleStep />
      {StepMapping[currentStep]()}
      <ButtonsGroup stepsValidated={getStepValidation.isValid} />
      <LanguageSelector/>
    </Container>
  );
};
