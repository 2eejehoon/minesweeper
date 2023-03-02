import { useAppSelector, useAppDispatch } from "../../store/index";
import { StyledCell, StyledButton } from "./CellStyle";
import { getStyle, getText } from "../../utils/mine";
import { memo, MouseEvent } from "react";
import { CODE } from "../../utils/contant";
import { useCallback } from "react";
import { openCell, endGame, updateCell } from "../../store/mineSlice";

type CellProps = {
  row: number;
  col: number;
};

function Cell({ row, col }: CellProps) {
  const dispatch = useAppDispatch();
  const table = useAppSelector((state) => state.mine.table);
  const code = table[row][col];

  const handleLeftClick = useCallback((code: number) => {
    switch (code) {
      case CODE.UNOPENED: // 닫힘, 지뢰 X
        dispatch(openCell({ row, col }));
        return;
      case CODE.UNOPENED_MINE: // 닫힘, 지뢰 O
        dispatch(endGame({ row, col }));
        return;
      default:
        return;
    }
  }, []);

  const handleRightClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>, code: number) => {
      e.preventDefault();
      // 열린 cell 아니라면 깃발 -> 물음표 -> 닫힘 -> 깃발 순서로 해당 cell의 상태 변경
      if (code !== CODE.OPENED) dispatch(updateCell({ row, col, code }));
    },
    []
  );

  return (
    <StyledCell>
      <StyledButton
        color={getStyle(code)}
        onClick={() => handleLeftClick(code)}
        onContextMenu={(e) => handleRightClick(e, code)}
      >
        {getText(code)}
      </StyledButton>
    </StyledCell>
  );
}

export default memo(Cell);
