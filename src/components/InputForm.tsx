import { memo } from "react";

interface InputFormProps {
  id: string;
  text: string;
  type: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputForm = ({ id, text, type, value, onChange }: InputFormProps) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </>
  );
};

export default memo(InputForm);
