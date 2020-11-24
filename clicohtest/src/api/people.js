import axios from "axios";

export const getPeople = () => {
  return axios.get(`https://swapi.dev/api/people/`);
};
