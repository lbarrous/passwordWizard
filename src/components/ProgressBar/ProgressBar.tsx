import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  StepCommonCss,
  StepIconCSS,
  StepIndexCSS,
  wizardSteps
} from "../../constants";
import { AppState } from "../../store/reducers/rootReducer";
import { Step } from "../../store/types.d";
import { StepStates } from "./models";
import { GlobalWrapper, List, StepElement } from "./styles";

const getStepStatus = (step: Step, currentStep: Step): StepStates => {
  if (step < currentStep) {
    return StepStates.COMPLETED;
  } else if (step === currentStep) {
    return StepStates.CURRENT;
  } else {
    return StepStates.NOT_STARTED;
  }
};

const Index = styled.span<{ stepStatus: StepStates }>`
  ${StepCommonCss}
  ${props => StepIndexCSS[props.stepStatus]}
`;

const Icon = styled.span<{ stepStatus: StepStates }>`
  ${StepCommonCss}
  ${props => StepIconCSS[props.stepStatus]}
`;

const StepProgressBar = (): JSX.Element => {
  const { currentStep }: { currentStep: Step } = useSelector(
    (state: AppState) => state.step
  );

  return (
    <GlobalWrapper>
      <List>
        {wizardSteps.map((step, i) => {
          const stepStatus = getStepStatus(step.stepId, currentStep);
          return (
            <StepElement key={i}>
              {stepStatus !== StepStates.COMPLETED && (
                <Index stepStatus={stepStatus}>{step.stepId + 1}</Index>
              )}
              {stepStatus === StepStates.COMPLETED && (
                <Icon stepStatus={stepStatus}>
                  <svg
                    width="1.5rem"
                    viewBox="0 0 13 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 3.5L4.5 7.5L12 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </Icon>
              )}
            </StepElement>
          );
        })}
      </List>
    </GlobalWrapper>
  );
};

export default StepProgressBar;
