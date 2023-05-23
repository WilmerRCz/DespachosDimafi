import * as Yup from "yup";
export const usuarioSchema = Yup.object({
  nombre_usuario: Yup.string().matches(/^[A-Za-z\u00C0-\u017F\s]{2,30}$/g, "Nombre inválido").required(),
  apellido_usuario: Yup.string().matches(/^[A-Za-z\u00C0-\u017F\s]{2,30}$/g, "Nombre inválido").required(),
  correo: Yup.string().email(),
  contrasena: Yup.string().min(6,'La contraseña debe tener mas de 6 caracteres'),
  privilegio: Yup.number(),
  sucursal: Yup.number(),
  estado_usuario: Yup.number(),
})
