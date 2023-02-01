import axios from "../libs/axios";

export const getUsuarios = async () => {
  return axios
    .get("/usuarios")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error.response.data);
    });
};
