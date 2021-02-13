import * as React from "react";
import { useSelector } from "react-redux";
import { wizardSteps } from "../../constants";
import { AppState } from "../../store/reducers/rootReducer";
import { Step } from "../../store/types.d";
import { StepStates } from "./models";
import "./styles.scss";

const getStepStatus = (step: Step, currentStep: Step): StepStates => {
  if (step < currentStep) {
    return StepStates.COMPLETED;
  } else if (step === currentStep) {
    return StepStates.CURRENT;
  } else {
    return StepStates.NOT_STARTED;
  }
};

const StepProgressBar = (): JSX.Element => {
  const { currentStep }: { currentStep: Step } = useSelector(
    (state: AppState) => state.step
  );

  return (
    <div className={`progress-bar-wrapper`}>
      <ul className={`step-progress-bar`}>
        {wizardSteps.map((step, i) => {
          const stepStatus = getStepStatus(step.stepId, currentStep);
          return (
            <li key={i} className={`progress-step ${stepStatus}`}>
              {stepStatus !== StepStates.COMPLETED && (
                <span className={"step-index"}>{step.stepId + 1}</span>
              )}
              {stepStatus === StepStates.COMPLETED && (
                <span className={"step-icon"}>
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
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepProgressBar;
