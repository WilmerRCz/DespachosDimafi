import { Usuarios } from "../interface/Usuario";
import axios from "../libs/axios";

export const getUsuarios = async () => {
  const { data } = await axios.get("/usuarios");
  return data;
};

export const getUsuariosExcel = async () => {
  const { data } = await axios.get("/usuarios/usuariosexcel", {responseType: 'blob'});
  return data;
};

export const getDespachadoresActivos = async () => {
  const { data } = await axios.get("/usuarios/activos/despachadores");
  return data;
};

export const createUsuario = (usuario: Usuarios) => {
  return axios.post("/usuarios", usuario);
};

export const updateUsuario = (usuario: Usuarios) => {
  return axios.put(`/usuarios/${usuario.id_usuario}`, usuario);
};
