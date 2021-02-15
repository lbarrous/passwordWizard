import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { StepCommonCss, StepIconCSS, StepIndexCSS, wizardSteps } from "../../constants";
import { AppState } from "../../store/reducers/rootReducer";
import { Step } from "../../store/types.d";
import { StepStates } from "./models";

const getStepStatus = (step: Step, currentStep: Step): StepStates => {
  if (step < currentStep) {
    return StepStates.COMPLETED;
  } else if (step === currentStep) {
    return StepStates.CURRENT;
  } else {
    return StepStates.NOT_STARTED;
  }
};

const GlobalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem 1rem 2rem;
  background: rgb(196, 196, 198);
  background: linear-gradient(
    0deg,
    rgba(196, 196, 198, 1) 0%,
    rgba(226, 226, 240, 1) 35%,
    rgba(207, 210, 210, 1) 100%
  );
`;

const List = styled.ul`
  width: 15%;
  margin: 0 0 1rem 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const StepElement = styled.li`
  list-style: none;
  position: relative;
  text-align: center;
  flex: 1 1 auto;
  position: relative;
  background-position: left bottom;

  &::before {
    content: "";
    position: absolute;
    top: 75%;
    height: 3px;
    width: 100%;
    right: 50%;
    transform: translateY(-50%);
    z-index: -1;
    background: linear-gradient(to left, #e7eaf3 50%, #4db193 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 200ms ease-in-out;
  }

  &:first-child::before {
    content: none;
  }
`;

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
