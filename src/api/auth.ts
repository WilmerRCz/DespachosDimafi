import { Login } from '../interface/Login'
import axios from "../libs/axios";

export const submitLogin = async ({correo, contrasena}: Login) => {
  return axios
    .post(
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
    )
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error.response.data);
    });
};
