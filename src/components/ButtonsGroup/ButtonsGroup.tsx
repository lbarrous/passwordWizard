import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, previousStep, StepActionTypes } from "../../store/actions/Step";
import { AppState } from "../../store/reducers/rootReducer";
import { StepState, StepValues } from "../../store/types.d";
import { ButtonsGroupProps } from "./models";
import { Button, Footer } from "./styles";

const goToNext = (dispatcher: Dispatch<StepActionTypes>) => {
  dispatcher(nextStep());
};

const backToPrevious = (dispatcher: Dispatch<StepActionTypes>) => {
  dispatcher(previousStep());
};

const ButtonsGroup = (props: ButtonsGroupProps): JSX.Element => {
  const { stepsValidated } = props;
  const { currentStep }: StepState = useSelector(
    (state: AppState) => state.step
  );
  const dispatcher = useDispatch<Dispatch<StepActionTypes>>();

  return (
    <Footer isStep3={currentStep === StepValues.STEP3}>
      {currentStep !== StepValues.STEP3 && (
        <Button onClick={() => backToPrevious(dispatcher)}>Cancelar </Button>
      )}
      <Button
        disabled={!stepsValidated}
        isDisabled={!stepsValidated}
        onClick={() => goToNext(dispatcher)}
      >
        Siguiente {">"}
      </Button>
    </Footer>
  );
};

export default ButtonsGroup;
