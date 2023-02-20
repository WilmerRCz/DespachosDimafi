import axios from "../libs/axios";

export const getComunas= async () => {
  const { data } = await axios.get("/comunas");
  return data;
};
