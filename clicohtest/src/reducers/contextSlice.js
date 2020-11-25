import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    password: "",
    role: "",
    logged: false,
  },
  loading: false,
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
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = initialState.user;
      const storateUser = localStorage.getItem("user");
      if (storateUser) localStorage.removeItem("user");
    },
    setUser: (state, { payload }) => {
      state.user = payload.user;
    },
  },
});

export const {
  loading,
  login,
  logout,
  setUser,
  setShowLoginButton,
} = contextSlice.actions;

export const contextSelector = (state) => state.context;

export default contextSlice.reducer;
