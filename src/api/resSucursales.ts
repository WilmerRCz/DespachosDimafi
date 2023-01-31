import axios from "../libs/axios";

export const getSucursales = async () => {
  return axios
    .get("/sucursales")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error.response.data);
    });
};