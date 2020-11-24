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
      debugger;
      state.user.name = payload;
      state.user.password = payload;
    },
  },
});

export const { login } = contextSlice.actions;

export const contextSelector = (state) => state.context;

export default contextSlice.reducer;
