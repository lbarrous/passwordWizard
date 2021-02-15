import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, previousStep, StepActionTypes } from "../../store/actions/Step";
import { AppState } from "../../store/reducers/rootReducer";
import { StepState, StepValues } from "../../store/types.d";
import "./styles.scss";

const goToNext = (dispatcher: Dispatch<StepActionTypes>) => {
  dispatcher(nextStep());
};

const backToPrevious = (dispatcher: Dispatch<StepActionTypes>) => {
  dispatcher(previousStep());
};

interface ButtonsGroupProps {
  stepsValidated: boolean;
}



const ButtonsGroup = (props: ButtonsGroupProps): JSX.Element => {
  const { stepsValidated } = props;
  const { currentStep }: StepState = useSelector(
    (state: AppState) => state.step
  );
  const dispatcher = useDispatch<Dispatch<StepActionTypes>>();

  const wrapperCSSClass = (currentStep === StepValues.STEP3 && "step3") || "";
  const disabledButtonCssClass = (!stepsValidated && "--disabled") || "";

  return (
    <footer className={`ButtonGroup ${wrapperCSSClass}`}>
      {currentStep !== StepValues.STEP3 && <button
        className="ButtonGroup__Button"
        onClick={() => backToPrevious(dispatcher)}
      >
        Cancelar{" "}
      </button>}
      <button
        disabled={!stepsValidated}
        className={`ButtonGroup__Button${disabledButtonCssClass}`}
        onClick={() => goToNext(dispatcher)}
      >
        Siguiente {">"}
      </button>
    </footer>
  );
};

export default ButtonsGroup;
