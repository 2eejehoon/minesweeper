import { useState, useCallback, ChangeEvent } from "react";

type useInputReturnType = [
  value: number,
  handler: (e: ChangeEvent<HTMLInputElement>) => void
];

function useInput(initialValue: number): useInputReturnType {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value)),
    []
  );

  return [value, handler];
}

export default useInput;
