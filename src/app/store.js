import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export default store = configureStore({
  reducer: {
    user: userReducer,
  },
});
