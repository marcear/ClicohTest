import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "../reducers/weatherSlice";
import dolarSlice from "../reducers/dolarSlice";
import contextSlice from "../reducers/contextSlice";
import usersSlice from "../reducers/userSlice";

export default configureStore({
  reducer: {
    weather: weatherSlice,
    dolar: dolarSlice,
    context: contextSlice,
    users: usersSlice,
  },
});
