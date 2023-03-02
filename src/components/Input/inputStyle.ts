import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  height: 100%;
  width: 40px;
  margin: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: black;
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
  height: 20px;
  width: 40px;
  color: tomato;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
`;
