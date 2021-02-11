import * as React from "react";
import "./styles.scss";
import { Step } from "../../store/types.d";
import { useSelector } from "react-redux";
import { AppState } from "../../store/reducers/rootReducer";
import { wizardSteps } from "../../constants";

const StepProgressBar = (): JSX.Element => {

  const { currentStep }: { currentStep: Step } = useSelector((state: AppState) => state.step);
  console.log('currentStep: ', currentStep);

  return (
    <div className={`progress-bar-wrapper`}>
      <ul className={`step-progress-bar`}>
        {
          wizardSteps.map((step, i) => {
            console.log('step: ', step);
            console.log(step.stepId === currentStep);
            return (
              <li key={i} className={`progress-step ${step.stepId === currentStep && "completed"}`}>
                    {<span className={"step-index"}>{step.label}</span>}
                  </li>
            )
          })
        }
        {/*
          <li className={`progress-step completed`}>
            {<span className={"step-index"}>{1}</span>}
          </li> */
        }
        {/*
          <li className={`progress-step current`}>
            {<span className={"step-index"}>{2}</span>}
          </li> */
        }
        {/*
          <li className={`progress-step`}>
            {<span className={"step-index"}>{3}</span>}
          </li> */
        }
        {/*
          <li className={`progress-step`}>
            {
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
            }
          </li> */
        }
        {/*
          <li className={`progress-step`}>
            {<span className={"step-icon"}>!</span>}
          </li> */
        }
      </ul>
    </div>
  );
};

export default StepProgressBar;
