import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { plantMine, openAroundCell, createTable } from "../lib/mine";
import { CODE, STATE } from "../contant";

export interface mineState {
  table: number[][];
  gameState: "WIN" | "LOSE" | "PLAY" | "READY";
  currentGame: {
    flag: number;
    mineLeft: number;
    cellLeft: number;
  };
  currentTable: { height: number; width: number; mine: number };
}

const initialState: mineState = {
  table: createTable(8, 8),
  gameState: STATE.READY,
  currentGame: { flag: 0, mineLeft: 8, cellLeft: 64 },
  currentTable: { height: 8, width: 8, mine: 8 },
};

export const mineSlice = createSlice({
  name: "mine",
  initialState,
  reducers: {
    setTable(
      state,
      action: PayloadAction<{ height: number; width: number; mine: number }>
    ) {
      const { height, width, mine } = action.payload;
      state.table = createTable(height, width);
      state.gameState = STATE.READY;
      state.currentGame = {
        flag: 0,
        mineLeft: mine,
        cellLeft: height * width,
      };
      state.currentTable = { height, width, mine };
    },

    firstClick(state, action: PayloadAction<{ row: number; col: number }>) {
      const { row, col } = action.payload;
      plantMine(row, col, state.currentTable, state.table);
      state.gameState = STATE.PLAY;
    },

    openCell(state, action: PayloadAction<{ row: number; col: number }>) {
      const { row, col } = action.payload;
      const openedCell = openAroundCell(row, col, state.table);
      state.currentGame.cellLeft -= openedCell;
      if (state.currentGame.cellLeft === 0 && state.currentGame.mineLeft > 0) {
        state.gameState = STATE.LOSE;
      }
    },

    endGame(state, action: PayloadAction<{ row: number; col: number }>) {
      const { row, col } = action.payload;

      for (let i = 0; i < state.table.length; i++) {
        for (let j = 0; j < state.table[0].length; j++) {
          if (state.table[i][j] === CODE.UNOPENED_MINE) {
            state.table[i][j] = CODE.OPENED_MINE; // 닫힌 지뢰 -> 열린 지뢰
          }
          if (state.table[i][j] === CODE.FLAG_MINE) {
            state.table[i][j] = CODE.REMOVED_MINE; // 깃발 꽂힌 지뢰 -> 제거된 지뢰
          }
        }
      }
      state.table[row][col] = CODE.CLICKED_MINE; // 열린 지뢰 -> 클릭한 지뢰
      state.gameState = STATE.LOSE;
    },

    updateCell(
      state,
      action: PayloadAction<{ row: number; col: number; code: number }>
    ) {
      const { row, col, code } = action.payload;

      switch (code) {
        case CODE.UNOPENED: // 닫힘, 지뢰 X -> 깃발, 지뢰 X
          state.table[row][col] = CODE.FLAG;
          state.currentGame.flag++;
          state.currentGame.cellLeft--;
          return;

        case CODE.FLAG: // 깃발, 지뢰 X -> 물음표, 지뢰 X
          state.table[row][col] = CODE.QUESTION;
          state.currentGame.flag--;
          return;

        case CODE.QUESTION: // 물음표, 지뢰 X -> 닫힘, 지뢰 X
          state.table[row][col] = CODE.UNOPENED;
          state.currentGame.cellLeft++;
          return;

        case CODE.FLAG_MINE: // 깃발, 지뢰 O -> 물음표, 지뢰 O
          state.table[row][col] = CODE.QUESTION_MINE;
          state.currentGame.flag--;
          state.currentGame.mineLeft++;
          return;

        case CODE.QUESTION_MINE: // 물음표, 지뢰 O -> 닫힘, 지뢰 O
          state.table[row][col] = CODE.UNOPENED_MINE;
          state.currentGame.cellLeft++;
          return;

        case CODE.UNOPENED_MINE: // 닫힘, 지뢰 O -> 깃발, 지뢰 O
          state.table[row][col] = CODE.FLAG_MINE;
          state.currentGame.flag++;
          state.currentGame.mineLeft--;
          state.currentGame.cellLeft--;
          if (state.currentGame.mineLeft === 0) {
            state.gameState = STATE.WIN;
          }
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
