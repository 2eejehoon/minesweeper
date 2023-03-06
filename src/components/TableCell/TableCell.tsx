import { useAppSelector, useAppDispatch } from "../../store/index";
import { StyledCell, StyledButton } from "./TableCellStyle";
import { getColor, getBgColor, getText } from "../../lib/mine";
import { MouseEvent } from "react";
import { CODE, STATE } from "../../contant";
import {
  firstClick,
  openCell,
  endGame,
  updateCell,
} from "../../store/mineSlice";

type TableCellProps = {
  row: number;
  col: number;
};

function TableCell({ row, col }: TableCellProps) {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector((state) => state.mine.gameState);
  const code = useAppSelector((state) => state.mine.table[row][col]);

  const handleLeftClick = () => {
    // gameState와 관련
    if (gameState === STATE.WIN || gameState === STATE.LOSE) return; // 게임 승리 또는 패배 시 클릭 X
    if (gameState === STATE.READY) dispatch(firstClick({ row, col })); // 첫 클릭 시 클릭한 cell 제외하고 지뢰 심기
    // cell의 code와 관련
    if (code === CODE.UNOPENED) dispatch(openCell({ row, col })); // 닫힘, 지뢰 X -> cell 열기
    if (code === CODE.UNOPENED_MINE) dispatch(endGame({ row, col })); // 닫힘, 지뢰 O -> 게임 오버
  };

  const handleRightClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // gameState와 관련
    if (gameState === STATE.WIN || gameState === STATE.LOSE) return; // 게임 승리, 패배 시 클릭 X
    if (gameState === STATE.READY) dispatch(firstClick({ row, col })); // 첫 클릭 시 클릭한 cell 제외하고 지뢰 심기
    // cell의 code와 관련
    if (code !== CODE.OPENED) dispatch(updateCell({ row, col, code })); // 열린 cell 아니라면  닫힘 -> 깃발 -> 물음표 -> 닫힘 순서로 해당 cell의 상태 변경
  };

  return (
    <StyledCell>
      <StyledButton
        bgColor={getBgColor(code)}
        color={getColor(code)}
        onClick={handleLeftClick}
        onContextMenu={handleRightClick}
      >
        {getText(code)}
      </StyledButton>
    </StyledCell>
  );
}

export default TableCell;
