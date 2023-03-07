import axios from "../libs/axios";

export const getTipoDocumento= async () => {
  const { data } = await axios.get("/tipo_documento");
  return data;
};