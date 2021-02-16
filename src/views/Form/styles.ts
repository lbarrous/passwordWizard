import styled from "styled-components";
import { MEDIUM_DEVICE_SCREEN } from "../../constants";

export const PasswordForm = styled.form`
  display: flex;
  @media only screen and (max-width: ${MEDIUM_DEVICE_SCREEN}px) {
    display: grid;
  }
`;

export const PasswordErrorLabel = styled.p`
  margin: 0;
  position: relative;
  top: -1rem;
  color: red;
`;

export const HintErrorLabel = styled.p`
  margin: 0;
  color: red;
`;

export const Hint = styled.div`
  border: 1px solid #c6c6c6;
  box-sizing: border-box;
  color: #090809;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 1;
  position: relative;
`;

export const HintInput = styled.input`
  border: none;
  box-sizing: border-box;
  font-size: 18px;
  padding: 14px 0 12px 14px;
  width: 100%;
`;

export const FormLabel = styled.span`
  font-weight: bold;
`;
