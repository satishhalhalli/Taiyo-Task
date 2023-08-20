import { configureStore } from "@reduxjs/toolkit";
import addContectSlice from "./addContectSlice";

const store = configureStore({
  reducer: {
    app: addContectSlice,
  },
});

export default store;
