import styled from "styled-components";

export const GlobalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem 1rem 2rem;
  background: rgb(196, 196, 198);
  background: linear-gradient(
    0deg,
    rgba(196, 196, 198, 1) 0%,
    rgba(226, 226, 240, 1) 35%,
    rgba(207, 210, 210, 1) 100%
  );
`;

export const List = styled.ul`
  width: 15%;
  margin: 0 0 1rem 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const StepElement = styled.li`
  list-style: none;
  position: relative;
  text-align: center;
  flex: 1 1 auto;
  position: relative;
  background-position: left bottom;

  &::before {
    content: "";
    position: absolute;
    top: 75%;
    height: 3px;
    width: 100%;
    right: 50%;
    transform: translateY(-50%);
    z-index: -1;
    background: linear-gradient(to left, #e7eaf3 50%, #4db193 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 200ms ease-in-out;
  }

  &:first-child::before {
    content: none;
  }
`;
