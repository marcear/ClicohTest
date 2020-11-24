import axios from "axios";
const API_KEY = "17aa969a404adb7b66022eb6e39abc4c";

export const getWeatherByCity = (cityName, metricSystem) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${metricSystem}&lang=sp, es&appid=${API_KEY}`
  );
};
