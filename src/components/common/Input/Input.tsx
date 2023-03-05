import { memo, ChangeEvent } from "react";
import { Wrapper, StyledInput, StyledLabel } from "./inputStyle";

interface InputFormProps {
  id: string;
  text: string;
  type: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, text, type, value, onChange }: InputFormProps) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={id}>{text}</StyledLabel>
      <StyledInput id={id} type={type} value={value} onChange={onChange} />
    </Wrapper>
  );
};

export default memo(Input);
