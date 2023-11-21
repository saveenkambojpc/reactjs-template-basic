import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import helperReducer from "./features/helper";
const store = configureStore({
  reducer: {
    users: userReducer,
    helper: helperReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
