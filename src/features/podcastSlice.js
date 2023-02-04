import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPodcast: {
    category: "",
  },
};
const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selectedPodcast = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setSelected, setCategory } = podcastSlice.actions;
export const podcastReducer = podcastSlice.reducer;
