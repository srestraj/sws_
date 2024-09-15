import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    homePage: (state, actions) => {
      console.log(" Go to this page", actions.payload);
    },
  },
});

export const { homePage } = homeSlice.actions;

export default homeSlice.reducer;
