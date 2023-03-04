import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { plantMine, openAroundCell, createTable } from "../lib/mine";
import { CODE, STATUS } from "../contant";

export interface mineState {
  table: number[][];
  status: "WIN" | "LOSE" | "PLAY" | "READY";
  mine: number;
  flag: number;
  time: number;
  currentTable: { row: number; col: number; mine: number };
}

const initialState: mineState = {
  table: createTable(8, 8),
  status: STATUS.READY,
  time: 0,
  mine: 16,
  flag: 0,
  currentTable: { row: 8, col: 8, mine: 16 },
};

export const mineSlice = createSlice({
  name: "mine",
  initialState,
  reducers: {
    setTable(
      state,
      action: PayloadAction<{ row: number; col: number; mine: number }>
    ) {
      const { row, col, mine } = action.payload;
      state.table = createTable(row, col);
      state.status = STATUS.READY;
      state.mine = mine;
      state.flag = 0;
      state.time = 0;
      state.currentTable = { row, col, mine };
    },

    firstClick(state, action: PayloadAction<{ row: number; col: number }>) {
      const { row, col } = action.payload;
      plantMine(row, col, state.currentTable, state.table);
      state.status = STATUS.PLAY;
    },

    openCell(state, action: PayloadAction<{ row: number; col: number }>) {
      const { row, col } = action.payload;
      openAroundCell(row, col, state.table);
    },

    endGame(state, action: PayloadAction<{ row: number; col: number }>) {
      const { row, col } = action.payload;

      for (let i = 0; i < state.table.length; i++) {
        for (let j = 0; j < state.table[0].length; j++) {
          if (state.table[i][j] === CODE.UNOPENED_MINE) {
            state.table[i][j] = CODE.OPENED_MINE; // 모든 cell을 확인하면서 닫힌 지뢰 -> 열린 지뢰
          }
          if (state.table[i][j] === CODE.FLAG_MINE) {
            state.table[i][j] = CODE.REMOVED_MINE;
          }
        }
      }
      state.table[row][col] = CODE.CLICKED_MINE; // 닫힌 지뢰 -> 클릭한 지뢰
      state.status = STATUS.LOSE;
    },

    updateCell(
      state,
      action: PayloadAction<{ row: number; col: number; code: number }>
    ) {
      const { row, col, code } = action.payload;

      switch (code) {
        case CODE.UNOPENED: // 닫힘, 지뢰 X -> 깃발, 지뢰 X
          state.table[row][col] = CODE.FLAG;
          return;

        case CODE.FLAG: // 깃발, 지뢰 X -> 물음표, 지뢰 X
          state.table[row][col] = CODE.QUESTION;
          return;

        case CODE.QUESTION: // 물음표, 지뢰 X -> 닫힘, 지뢰 X
          state.table[row][col] = CODE.UNOPENED;
          return;

        case CODE.FLAG_MINE: // 깃발, 지뢰 O -> 물음표, 지뢰 O
          state.table[row][col] = CODE.QUESTION_MINE;
          return;

        case CODE.QUESTION_MINE: // 물음표, 지뢰 O -> 닫힘, 지뢰 O
          state.table[row][col] = CODE.UNOPENED_MINE;
          return;

        case CODE.UNOPENED_MINE: // 닫힘, 지뢰 O -> 깃발, 지뢰 O
          state.table[row][col] = CODE.FLAG_MINE;
          return;

        default:
          break;
      }
    },
  },
});

export const { setTable, firstClick, openCell, endGame, updateCell } =
  mineSlice.actions;

export default mineSlice.reducer;
