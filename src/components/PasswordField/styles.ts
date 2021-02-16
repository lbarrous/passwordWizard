import styled from "styled-components";
import { PasswordStrengthLevelsCSS } from "./../../constants";

export const GlobalWrapper = styled.div`
  margin: 2rem 2rem 2rem 0;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const handlePasswordStrength = (score: number) => {
  return PasswordStrengthLevelsCSS[score];
};

export const PasswordWrapper = styled.div<{ score: number }>`
  border: 1px solid #c6c6c6;
  box-sizing: border-box;
  color: #090809;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 1;
  position: relative;
`;

export const PasswordInput = styled.input`
  border: none;
  box-sizing: border-box;
  font-size: 18px;
  padding: 14px 0 12px 14px;
  &:focus {
    outline: none;
  }
`;

export const StrengthBar = styled.div<{ score: number; password: string }>`
  box-sizing: border-box;
  height: 2px;
  position: relative;
  top: 1px;
  right: 1px;
  transition: width 300ms ease-out;
  width: 0;
  ${props => props.password.length > 0 && handlePasswordStrength(props.score)}
`;
