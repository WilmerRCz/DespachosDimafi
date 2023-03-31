import axios from "../libs/axios";

export const getEstadoActividad= async () => {
  const { data } = await axios.get("/estado_actividad");
  return data;
};