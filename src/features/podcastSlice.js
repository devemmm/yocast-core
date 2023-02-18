import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  podcasts: [],
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

    setPodcastss: (state, action) => {
      state.podcasts = action.payload;
    },
  },
});

export const { setSelected, setCategory, setPodcastss } = podcastSlice.actions;
export const podcastReducer = podcastSlice.reducer;
