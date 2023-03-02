import styled from "styled-components";

export const StyledTd = styled.td`
  padding: 0;
`;

export const StyledButton = styled.button<{ color: string }>`
  height: 30px;
  width: 30px;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border: 1px solid black;
  &:hover,
  :active :focus {
    opacity: 70%;
  }
`;
