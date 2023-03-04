import styled from "styled-components";

interface CellButtonProps {
  bgColor: string;
  color: string;
}

export const StyledCell = styled.td`
  padding: 0;
`;

export const StyledButton = styled.button<CellButtonProps>`
  color: ${(props) => props.color};
  font-size: 12px;
  font-weight: 600;
  height: 25px;
  width: 25px;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border: 1px solid white;
  &:hover,
  :active :focus {
    opacity: 70%;
  }
`;
