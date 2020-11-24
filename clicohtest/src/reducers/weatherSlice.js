import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherByCity } from "../api/weather";

const initialState = {
  data: null,
  loading: false,
  hasError: false,
  erroMessage: "",
  searchCityQuery: "",
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ cityName, metricSystem }) => {
    const response = await getWeatherByCity(cityName, metricSystem);
    return response.data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    updateSearchCityQuery: (state, { payload }) => {
      state.searchCityQuery = payload;
    },
  },
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchWeather.rejected]: (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.errorMessage = action.error.message;
      console.log(action.error.message);
    },
  },
});

export const { loading, updateSearchCityQuery } = weatherSlice.actions;

export const weatherSelector = (state) => state.weather;

export default weatherSlice.reducer;
