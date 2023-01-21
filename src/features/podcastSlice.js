import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPodcast: {},
};
const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selectedPodcast = action.payload;
    },
  },
});

export const { setSelected } = podcastSlice.actions;
export const podcastReducer = podcastSlice.reducer;
