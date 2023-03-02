import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { plantMine } from "../utils/mine";
import { CODE } from "../utils/contant";

export interface mineState {
  table: number[][];
}

const initialState: mineState = {
  table: plantMine(10, 10, 10),
};

export const mineSlice = createSlice({
  name: "mine",
  initialState,
  reducers: {
    setTable(
      state,
      action: PayloadAction<{ row: number; col: number; mine: number }>
    ) {
      state.table = plantMine(
        action.payload.row,
        action.payload.col,
        action.payload.mine
      );
    },
    openCell(state, action: PayloadAction<{ row: number; col: number }>) {
      console.log(action.payload.row, action.payload.col);
      // function DFS(row: number, col: number): void {
      //   if (
      //     row < 0 ||
      //     col < 0 ||
      //     row >= state.table.length ||
      //     col >= state.table[0].length
      //   ) {
      //     return console.log("범위 밖");
      //   }
      // }
      // DFS(action.payload.row, action.payload.col);
    },
    endGame(state, action: PayloadAction<{ row: number; col: number }>) {
      // 모든 cell을 확인하면서 닫힌 지뢰 -> 열린 지뢰
      for (let row = 0; row < state.table.length; row++) {
        for (let col = 0; col < state.table[0].length; col++) {
          if (state.table[row][col] === CODE.UNOPENED_MINE) {
            state.table[row][col] = CODE.OPENED_MINE;
          }
        }
      }
      // 마지막으로 클릭한 지뢰
      const { row, col } = action.payload;
      state.table[row][col] = CODE.CLICKED_MINE;
    },
    updateCell(
      state,
      action: PayloadAction<{ row: number; col: number; code: number }>
    ) {
      const { row, col, code } = action.payload;
      switch (code) {
        // 닫힘, 지뢰 X -> 깃발, 지뢰 X
        case CODE.UNOPENED:
          state.table[row][col] = CODE.FLAG;
          return;
        // 깃발, 지뢰 X -> 물음표, 지뢰 X
        case CODE.FLAG:
          state.table[row][col] = CODE.QUESTION;
          return;
        // 물음표, 지뢰 X -> 닫힘, 지뢰 X
        case CODE.QUESTION:
          state.table[row][col] = CODE.UNOPENED;
          return;
        // 깃발, 지뢰 O -> 물음표, 지뢰 X
        case CODE.FLAG_MINE:
          state.table[row][col] = CODE.QUESTION_MINE;
          return;
        // 물음표, 지뢰 O -> 닫힘, 지뢰 O
        case CODE.QUESTION_MINE:
          state.table[row][col] = CODE.UNOPENED_MINE;
          return;
        // 닫힘, 지뢰 O -> 깃발, 지뢰 O
        case CODE.UNOPENED_MINE:
          state.table[row][col] = CODE.FLAG_MINE;
          return;
        default:
          break;
      }
    },
  },
});

export const { setTable, openCell, endGame, updateCell } = mineSlice.actions;

export default mineSlice.reducer;
