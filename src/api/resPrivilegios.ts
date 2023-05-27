import axios from "../libs/axios";

export const getPrivilegios = async () => {
  const { data } = await axios.get("/privilegios");
  return data;
};