import axios from "../libs/axios";

export const getVehiculos = async () => {
  const {data} = await axios.get("/vehiculos");
  return data;
};

export const getVehiculosActivos = async () => {
  const {data} = await axios.get("/vehiculos/activos");
  return data;
};
