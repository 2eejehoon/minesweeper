import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import plantMine from "../utils/plantMine";

export interface mineState {
  data: number[][];
}

const initialState: mineState = {
  data: plantMine(10, 10, 10),
};

export const mineSlice = createSlice({
  name: "mine",
  initialState,
  reducers: {
    setGame(
      state,
      action: PayloadAction<{ row: number; col: number; mine: number }>
    ) {
      state.data = plantMine(
        action.payload.row,
        action.payload.col,
        action.payload.mine
      );
    },
  },
});

export const { setGame } = mineSlice.actions;

export default mineSlice.reducer;
