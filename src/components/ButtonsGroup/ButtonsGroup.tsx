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

  return (
    <footer className={`buttons-group-wrapper`}>
      {currentStep !== StepValues.STEP3 && <button
        className="buttons-group-wrapper-button"
        onClick={() => backToPrevious(dispatcher)}
      >
        Cancelar{" "}
      </button>}
      <button
        disabled={!stepsValidated}
        className="buttons-group-wrapper-button"
        onClick={() => goToNext(dispatcher)}
      >
        Siguiente {">"}
      </button>
    </footer>
  );
};

export default ButtonsGroup;
