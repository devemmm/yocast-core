import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  message: "",
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
  },
});

export const { setShowAlert, setMessage } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
