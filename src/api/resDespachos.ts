import axios from "../libs/axios";

export const getDespachos = async () => {
  return axios
    .get("/despachos")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error.response.data);
    });
};
