import useInput from "../hooks/useInput";
import { useAppDispatch } from "../store";
import { setGame } from "../store/mineSlice";
import { useCallback } from "react";
import InputForm from "./InputForm";

export default function Setting() {
  const [col, handleColChange, resetCol] = useInput(10);
  const [row, handleRowChange, resetRow] = useInput(10);
  const [mine, handleMineChange, resetMine] = useInput(10);

  const dispatch = useAppDispatch();

  const handleStart = useCallback(
    () => dispatch(setGame({ row, col, mine })),
    [row, col, mine]
  );

  return (
    <>
      <InputForm
        id="가로"
        text="가로"
        type="number"
        value={col}
        onChange={handleColChange}
      />
      <InputForm
        id="세로"
        text="세로"
        type="number"
        value={row}
        onChange={handleRowChange}
      />
      <InputForm
        id="지뢰"
        text="지뢰"
        type="number"
        value={mine}
        onChange={handleMineChange}
      />
      <button onClick={handleStart}>시작</button>
    </>
  );
}
