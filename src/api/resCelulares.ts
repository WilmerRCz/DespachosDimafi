import axios from "../libs/axios";

export const getCelulares= async () => {
  const { data } = await axios.get("/celulares");
  return data;
};