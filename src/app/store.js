import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { estateApi } from "../services/EstateApi";
export default configureStore({
  reducer : {
      [estateApi.reducerPath] : estateApi.reducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(estateApi.middleware)
})