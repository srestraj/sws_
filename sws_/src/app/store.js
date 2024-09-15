import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./features/banner/bannnerSlice";
import shopReducer from "./features/shop/shopSlice";
import discoverReducer from "./features/discover/discoverSlice";
import educationReducer from "./features/education/educationSlice";
import scienceReducer from "./features/science/scienceSlice";
import aboutReducer from "./features/about/aboutSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    shop: shopReducer,
    discover: discoverReducer,
    education: educationReducer,
    science: scienceReducer,
    about: aboutReducer,
  },
});
