import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/reducers/rootReducer";
import { Step } from "../../store/types.d";
import { getTriangleCSSClassFromStep } from "../../utils";

export const TriangleStep = () => {
  const { currentStep }: { currentStep: Step } = useSelector(
    (state: AppState) => state.step
  );

  const CSSClass = getTriangleCSSClassFromStep(currentStep);

  return <div className={`arrow ${CSSClass}`}></div>;
};
