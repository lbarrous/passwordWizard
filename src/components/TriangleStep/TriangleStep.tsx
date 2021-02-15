import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/reducers/rootReducer";
import { Step } from "../../store/types.d";
import { Triangle } from "./styles";

export const TriangleStep = () => {
  const { currentStep }: { currentStep: Step } = useSelector(
    (state: AppState) => state.step
  );

  return <Triangle step={currentStep} />;
};
