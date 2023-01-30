import axios from "../libs/axios";

export const submitLogin = async (correo: string, contrasena: string) => {
  return axios.post(
    "/login",
    {
      correo,
      contrasena,
    },
    {
      headers: {
        Authorization: "",
      },
    }
  );
};
