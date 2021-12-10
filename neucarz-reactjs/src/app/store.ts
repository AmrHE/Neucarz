import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import homePageReducer from "./containers/HomePage/slice";
import reduxLogger from "redux-logger";

export const store = configureStore({
  //Logger Middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    // counter: counterReducer,
    homePage: homePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
