import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
  level: 1,
};

export const counterSlice = createSlice({
  name: "openGuide",
  initialState,
  reducers: {
    nextLevel: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.level += 1;
    },

    closeGuide: (state) => {
      state.open = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextLevel, closeGuide } = counterSlice.actions;

export default counterSlice.reducer;
