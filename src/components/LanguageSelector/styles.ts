import styled from "styled-components";
import { primaryColor, terciaryColor, whiteColor } from './../../constants';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  border: 1px #e0e0e0;
  border-style: solid;
  box-shadow: 0 2px 2px -2px grey;
  background-color: ${whiteColor};
  border: 1px #e0e0e0;
  border-style: solid;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.5rem;
  border: 1px;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  font-weight: bold;
  background-color: ${terciaryColor};
  color: ${primaryColor};
  cursor: pointer;
`;