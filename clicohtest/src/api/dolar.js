import axios from "axios";

export const getDolarValue = () => {
  return axios.get(
    `https://www.dolarsi.com/api/api.php?type=valoresprincipales`
  );
};
