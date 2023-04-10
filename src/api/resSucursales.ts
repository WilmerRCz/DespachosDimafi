import { Sucursales } from "../interface/Sucursales";
import axios from "../libs/axios";

export const getSucursales = async () => {
  const { data } = await axios.get("/sucursales");
  return data;
};

export const getSucursalesActivas = async () => {
  const { data } = await axios.get("/sucursales/activas");
  return data;
};

export const createSucursal = (sucursal: Sucursales) => {
  return axios.post("/sucursales", sucursal);
};

export const updateSucursal = (sucursal: Sucursales) => {
  return axios.put(`/sucursales/${sucursal.id_sucursal}`, sucursal);
};