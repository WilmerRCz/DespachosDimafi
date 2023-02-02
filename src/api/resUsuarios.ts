import axios from "../libs/axios";

export const getUsuarios = async () => {
  const { data } = await axios.get("/usuarios");
  return data;
};
