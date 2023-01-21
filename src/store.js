import { configureStore } from "@reduxjs/toolkit";
import { pageReducer } from "./features/pageSlice";

export const Store = configureStore({
  reducer: {
    page: pageReducer,
  },
});
