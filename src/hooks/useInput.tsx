import { useState, useCallback, ChangeEvent } from "react";

type useInputReturnType = [
  value: number,
  handler: (e: ChangeEvent<HTMLInputElement>) => void
];

function useInput(
  initialValue: number,
  min: number,
  max: number
): useInputReturnType {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (Number(e.target.value) >= min && Number(e.target.value) <= max)
        setValue(Number(e.target.value));
    },
    [min, max]
  );

  return [value, handler];
}

export default useInput;
