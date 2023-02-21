import axios from "../libs/axios";

export const getDespachos = async () => {
  const { data } = await axios.get("/despachos");
  return data;
};

export const createDespacho = (despacho: object) => {
  return axios.post("/despachos", despacho);
};
