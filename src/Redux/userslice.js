import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { userInfo: null, show: false },
  reducers: {
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    showPopUp: state => {
      state.show = true;
    },
    closePopUp: state => {
      state.show = false;
    },
  },
});

export const { getUserInfo, showPopUp, closePopUp } = user.actions;

export default user.reducer;
