import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { nextStep, previousStep, StepActionTypes } from "../../store/actions/Step";
import "./styles.scss";

const goToNext = (dispatcher: Dispatch<StepActionTypes>) => {
  dispatcher(nextStep());
};

const backToPrevious = (dispatcher: Dispatch<StepActionTypes>) => {
  dispatcher(previousStep());
};

const ButtonsGroup = (): JSX.Element => {
  const dispatcher = useDispatch<Dispatch<StepActionTypes>>();
  return (
    <footer className={`buttons-group-wrapper`}>
      <button
        className="buttons-group-wrapper-button"
        onClick={() => backToPrevious(dispatcher)}
      >
        Cancelar{" "}
      </button>
      <button
        className="buttons-group-wrapper-button"
        onClick={() => goToNext(dispatcher)}
      >
        Siguiente {">"}
      </button>
    </footer>
  );
};

export default ButtonsGroup;
