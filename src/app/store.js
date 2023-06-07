import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/api/authApi";
import authSlice from "../features/services/authSlice";
import { contactApi } from "../features/api/contactApi";

export const store = configureStore({
    reducer : {
        [authApi.reducerPath]: authApi.reducer,
        [contactApi.reducerPath]: contactApi.reducer,
        auth:authSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware,contactApi.middleware),
})