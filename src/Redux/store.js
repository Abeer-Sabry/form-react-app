import { configureStore } from "@reduxjs/toolkit";
import social from "./socialSlice";
import user from "./userslice";
const store = configureStore({
  reducer: {
    social,
    user,
  },
});
export default store;
