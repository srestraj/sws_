import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./features/banner/bannnerSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
  },
});
