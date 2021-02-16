import styled from "styled-components";
import { TriangleStepCSS } from "./../../constants";
import { Step } from "./../../store/types.d";

export const Triangle = styled.div<{ step: Step }>`
  height: 0;
  box-sizing: border-box;
  width: 0;
  border-bottom: 12px solid white;
  border-left: 14px dotted transparent;
  border-right: 14px dotted transparent;
  left: -15px;
  top: 2px;

  z-index: 1;
  position: relative;
  margin-top: -12px;

  ${props => TriangleStepCSS[props.step]}
`;
