import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    password: "",
    role: "",
    logged: false,
  },
};

export const contextSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    login: (state, { payload }) => {
      state.user.name = payload.name;
      state.user.password = payload.password;
      state.user.logged = true;
      state.user.role = "admin";
    },
    logout: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { loading, login, logout } = contextSlice.actions;

export const contextSelector = (state) => state.context;

export default contextSlice.reducer;
