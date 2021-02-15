import styled from "styled-components";
import { whiteColor } from "../../constants";
import { getButtonCSS } from "../../utils";

export const Footer = styled.footer<{ isStep3: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.isStep3 ? "flex-end" : "space-between")};
  padding: 2rem;
  border: 1px #e0e0e0;
  border-style: solid;
  box-shadow: 0 2px 2px -2px grey;
  background-color: ${whiteColor};
  border: 1px #e0e0e0;
  border-style: solid;
`;

export const Button = styled.button<{ isDisabled?: boolean, isPrimary: boolean }>`
  padding: 1rem 1.5rem 1rem 1.5rem;
  border: 1px;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  font-weight: bold;
  ${props => (getButtonCSS(props.isDisabled, props.isPrimary))}
  cursor: ${props => (!!props.isDisabled ? "auto" : "pointer")};

  ${props =>
    !!props.isDisabled &&
    `border: 1px solid #999999;
    color: #666666;`};
`;