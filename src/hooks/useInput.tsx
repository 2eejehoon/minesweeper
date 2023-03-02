import { useState, useCallback, ChangeEvent } from "react";

type useInputReturnType = [
  value: number,
  handler: (e: ChangeEvent<HTMLInputElement>) => void,
  reset: () => void
];

function useInput(initialValue: number): useInputReturnType {
  const [value, setValue] = useState<number>(initialValue);

  const handler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value)),
    []
  );

  const reset = useCallback(() => setValue(initialValue), []);

  return [value, handler, reset];
}

export default useInput;
