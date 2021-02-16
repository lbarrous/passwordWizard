import styled from "styled-components";
import { MEDIUM_DEVICE_SCREEN, secondaryColor } from "./../constants";

export const Container = styled.div`
  color: ${secondaryColor};
  background-color: #f3eded;
  padding: 2rem;
`;

export const Key = styled.img`
  position: absolute;
  right: 2.1rem;
  height: 5rem;
  top: 37px;

  @media only screen and (max-width: ${MEDIUM_DEVICE_SCREEN}px) {
    height: 3rem;
    top: 53px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 5rem;
  left: 3rem;
  @media only screen and (max-width: ${MEDIUM_DEVICE_SCREEN}px) {
    height: 1rem;
  }
`;
