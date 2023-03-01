import { Despachos } from "../interface/Despachos";
import axios from "../libs/axios";

export const getDespachos = async () => {
  const { data } = await axios.get("/despachos");
  return data;
};

export const createDespacho = (despacho: Despachos) => {
  return axios.post("/despachos", despacho);
};

export const updateDespacho = (despacho: Despachos) => {
  return axios.post(`/${despacho.id_despacho}`, despacho);
};
