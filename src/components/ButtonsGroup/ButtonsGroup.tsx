import { TFunction } from "i18next";
import React, { Dispatch } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import StyledContentLoader from "styled-content-loader";
import { STATUS_OK } from "../../services/api";
import { nextStep, previousStep, StepActionTypes } from "../../store/actions/Step";
import { AppState } from "../../store/reducers/rootReducer";
import { LoadingState, Step, StepState, StepValues } from "../../store/types.d";
import { ButtonsGroupProps } from "./models";
import { Button, Footer } from "./styles";

const goToNext = (dispatcher: Dispatch<StepActionTypes>) => {
  dispatcher(nextStep());
};

const backToPrevious = (dispatcher: Dispatch<StepActionTypes>) => {
  dispatcher(previousStep());
};

const getNextTranslation = (
  t: TFunction,
  currentStep: Step,
  responseFromServer: number
) => {
  if (currentStep === StepValues.STEP3) {
    return responseFromServer === STATUS_OK ? "go_forward" : "go_back";
  } else {
    return "next";
  }
};

const ButtonsGroup = (props: ButtonsGroupProps): JSX.Element => {
  const { t } = useTranslation();
  const { stepsValidated } = props;
  const { currentStep }: StepState = useSelector(
    (state: AppState) => state.step
  );
  const { isLoading, responseFromServer }: LoadingState = useSelector(
    (state: AppState) => state.loading
  );
  const dispatcher = useDispatch<Dispatch<StepActionTypes>>();

  return (
    <StyledContentLoader isLoading={isLoading}>
      <Footer isStep3={currentStep === StepValues.STEP3}>
        {currentStep !== StepValues.STEP3 && (
          <Button onClick={() => backToPrevious(dispatcher)}>
            {t("cancel")}
          </Button>
        )}
        <Button
          disabled={!stepsValidated || isLoading}
          isDisabled={!stepsValidated || isLoading}
          onClick={() => goToNext(dispatcher)}
        >
          {t(getNextTranslation(t, currentStep, responseFromServer))}
        </Button>
      </Footer>
    </StyledContentLoader>
  );
};

export default ButtonsGroup;
