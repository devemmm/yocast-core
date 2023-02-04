import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  message: "",
  showSidebar: false,
  showLogoutBackDrop: false,
  isLoggedOut: false,
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
    setShowLogoutBackDrop: (state, action) => {
      if (action.payload == true) {
        state.showLogoutBackDrop = true;
      } else {
        state.showLogoutBackDrop = false;
      }
    },
    setIsLoggedOut: (state, action) => {
      if (action.payload == true) {
        state.isLoggedOut = true;
      } else {
        state.isLoggedOut = false;
      }
    },
  },
});

export const {
  setShowAlert,
  setMessage,
  setShowLogoutBackDrop,
  setShowSidebar,
  setIsLoggedOut,
} = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
