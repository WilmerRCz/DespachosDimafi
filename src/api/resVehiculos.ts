import axios from "../libs/axios";

export const getVehiculos = async () => {
  return axios
    .get("/vehiculos")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error.response.data);
    });
};
