import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  message: "",
  showSidebar: false,
};
const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setShowAlert: (state, action) => {
      if (action.payload == true) {
        state.showAlert = true;
      } else {
        state.showAlert = false;
      }
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setShowSidebar: (state, action) => {
      if (action.payload == true) {
        state.showSidebar = true;
      } else {
        state.showSidebar = false;
      }
    },
  },
});

export const { setShowAlert, setMessage, setShowSidebar } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
