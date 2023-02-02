import axios from "../libs/axios";

export const getDespachos = async () => {
  const { data } = await axios.get("/despachos");
  return data;
};
