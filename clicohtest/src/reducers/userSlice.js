import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//api
import { getPeople } from "../api/people";

const initialState = {
  users: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await getPeople();
  const dataWithIndex = response.data.results.map((result, index) => {
    return { ...result, index: index };
  });
  return dataWithIndex;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, { payload }) => {
      debugger;
      state.users = state.users.filter((user) => user.index !== payload.index);
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

export const { loading, login, deleteUser } = usersSlice.actions;

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;
