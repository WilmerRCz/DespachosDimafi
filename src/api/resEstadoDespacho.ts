import axios from "../libs/axios";

export const getEstadoDespacho= async () => {
  const { data } = await axios.get("/estado_despacho");
  return data;
};