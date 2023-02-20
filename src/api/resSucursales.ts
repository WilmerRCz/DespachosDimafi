import axios from "../libs/axios";

export const getSucursales = async () => {
  const { data } = await axios.get("/sucursales");
  return data;
};

export const getSucursalesActivas = async () => {
  const { data } = await axios.get("/sucursales/activas");
  return data;
};
