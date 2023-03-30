import { configureStore } from "@reduxjs/toolkit";
import { pageReducer } from "./features/pageSlice";
import { podcastReducer } from "./features/podcastSlice";

export const Store = configureStore({
  reducer: {
    page: pageReducer,
    podcast: podcastReducer,
  },
});
