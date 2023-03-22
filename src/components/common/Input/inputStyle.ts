import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 5px;
  padding: 5px;
  color: black;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  border: none;
  outline: 1px solid lightgrey;
  border-radius: 5px;
  background-color: white;

  &:hover,
  :active,
  :focus {
    border: none;
    outline: 2px solid black;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledLabel = styled.label`
  height: 40px;
  width: 40px;
  color: tomato;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
