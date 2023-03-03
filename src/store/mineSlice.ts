import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { openAroundCell, plantMine } from "../lib/mine";
import { CODE, STATUS } from "../contant";

export interface mineState {
  table: number[][];
  status: "WIN" | "LOSE" | "PLAY" | "READY";
  time: number;
  mine: number;
  flag: number;
}

const initialState: mineState = {
  table: plantMine(10, 10, 10),
  status: STATUS.READY,
  time: 0,
  mine: 10,
  flag: 0,
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
      state.table = plantMine(row, col, mine);
      state.status = STATUS.READY;
      state.time = 0;
      state.mine = mine;
      state.flag = 0;
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

export const { setTable, openCell, endGame, updateCell } = mineSlice.actions;

export default mineSlice.reducer;
