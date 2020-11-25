import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDolarValue } from "../api/dolar";

const initialState = {
  data: [],
  loading: false,
  hasError: false,
  erroMessage: "",
};

export const fetchDolar = createAsyncThunk("dolar/fetchDolar", async () => {
  const response = await getDolarValue();
  return response.data;
});

export const dolarSlice = createSlice({
  name: "dolar",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDolar.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchDolar.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchDolar.rejected]: (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.errorMessage = action.error.message;
      console.log(action.error.message);
    },
  },
});

export const { loading } = dolarSlice.actions;

export const dolarSelector = (state) => state.dolar;

export default dolarSlice.reducer;
