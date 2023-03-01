import useInput from "../hooks/useInput";
import { useAppDispatch } from "../store";
import { setGame } from "../store/mineSlice";
import { useCallback } from "react";

export default function Setting() {
  const [row, handleRowChange, resetRow] = useInput(10);
  const [col, handleColChange, resetCol] = useInput(10);
  const [mine, handleMineChange, resetMine] = useInput(10);

  const dispatch = useAppDispatch();

  const handleStart = useCallback(
    () => dispatch(setGame({ row, col, mine })),
    [row, col, mine]
  );

  return (
    <>
      <label>가로</label>
      <input type="number" value={row} onChange={handleRowChange} />
      <label>세로</label>
      <input type="number" value={col} onChange={handleColChange} />
      <label>지뢰</label>
      <input type="number" value={mine} onChange={handleMineChange} />
      <button onClick={handleStart}>시작</button>
    </>
  );
}
