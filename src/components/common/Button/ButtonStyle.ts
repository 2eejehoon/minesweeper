import styled from "styled-components";

interface ButtonProps {
  width: number;
  height: number;
  bgColor?: string;
  color: string;
}

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  &:hover,
  :active {
    opacity: 70%;
  }
`;
