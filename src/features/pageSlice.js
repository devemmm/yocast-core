import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: true,
  showAlert: false,
  message: "",
  showFormPortal: false,
  showSidebar: false,
  showLogoutBackDrop: false,
  showDeleteAlert: false,
  isLoggedOut: false,
  statisticsCards: [
    {
      count: 235,
      title: 0,
      subtitle: "Podcasts",
      progress: 0.75,
      increase: 1.5,
    },
    {
      count: 344,
      title: 0,
      subtitle: "Subscription",
      progress: 0.5,
      progressCount: 1.5,
      increase: 0,
    },
    {
      count: 100,
      title: 0,
      subtitle: "My balance",
      progress: 0,
      progresCount: 0.6,
      increase: 5,
    },
    {
      count: 534,
      title: 0,
      progressCount: 0.8,
      subtitle: "Users",
      progress: 0,
      increase: 59,
    },
  ],
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
    initializeStatisticsCards: (state, action) => {
      const cards = state.statisticsCards;
      cards.forEach((card) => {
        card.title = card.title < card.count ? card.title + 1 : card.title;
      });
      state.statisticsCards = cards;
    },
    setShowFormPortal: (state, action) => {
      if (action.payload == true) {
        state.showFormPortal = true;
      } else {
        state.showFormPortal = false;
      }
    },
    setShowDeleteAlert: (state, action) => {
      if (action.payload == true) {
        state.showDeleteAlert = true;
      } else {
        state.showDeleteAlert = false;
      }
    },
    setIsDarkMode: (state, action) => {
      if (action.payload == true) {
        state.isDarkMode = true;
      } else {
        state.isDarkMode = false;
      }
    },
  },
});

export const {
  setShowAlert,
  initializeStatisticsCards,
  setMessage,
  setShowLogoutBackDrop,
  setShowSidebar,
  setIsLoggedOut,
  setShowFormPortal,
  setShowDeleteAlert,
  setIsDarkMode,
} = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
