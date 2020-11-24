import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//api
import { getPeople } from "../api/people";

const initialState = {
  users: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await getPeople();
  return response.data.results;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.errorMessage = action.error.message;
      console.log(action.error.message);
    },
  },
});

export const { loading, login } = usersSlice.actions;

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;
