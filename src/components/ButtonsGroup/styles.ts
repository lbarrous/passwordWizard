import styled from "styled-components";

export const Footer = styled.footer<{ isStep3: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.isStep3 ? "flex-end" : "space-between")};
  padding: 2rem;
  border: 1px #e0e0e0;
  border-style: solid;
  box-shadow: 0 2px 2px -2px grey;
  background-color: white;
  border: 1px #e0e0e0;
  border-style: solid;
`;

export const Button = styled.button<{ isDisabled?: boolean }>`
  padding: 1rem 1.5rem 1rem 1.5rem;
  border: 1px;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  background-color: ${props => (!!props.isDisabled ? "#cccccc" : "#002b45")};
  cursor: ${props => (!!props.isDisabled ? "auto" : "pointer")};

  ${props =>
    !!props.isDisabled &&
    `border: 1px solid #999999;
    color: #666666;`};
`;