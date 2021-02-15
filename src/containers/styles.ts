import styled from "styled-components";
import { secondaryColor } from './../constants';

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
`;

export const Logo = styled.img`
  position: absolute;
  top: 5rem;
  left: 3rem;
`;
