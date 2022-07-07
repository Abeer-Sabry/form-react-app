import { createSlice } from "@reduxjs/toolkit";

const social = createSlice({
  name: "userSocial",
  initialState: { socialInfo: {} },
  reducers: {
    getSocialInfo: (state, action) => {
      state.socialInfo = action.payload;
    },
  },
});

export const { getUserInfo } = social.actions;

export default social.reducer;
