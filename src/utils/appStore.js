import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

console.log(appStore);

export default appStore;
