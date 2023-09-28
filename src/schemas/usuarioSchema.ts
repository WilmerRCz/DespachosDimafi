import * as Yup from "yup";
export const usuarioSchema = Yup.object({
  nombre_usuario: Yup.string().matches(/^[A-Za-z\u00C0-\u017F\s]{2,30}$/g, "Nombre inválido"),
  apellido_usuario: Yup.string().matches(/^[A-Za-z\u00C0-\u017F\s]{2,30}$/g, "Nombre inválido").required(),
  correo: Yup.string().email().required('Correo obligatorio'),
  contrasena: Yup.string().min(6,'La contraseña debe tener mas de 6 caracteres').required('Contraseña obligatoria'),
  privilegio: Yup.number().required('Obligatorio'),
  sucursal: Yup.number().required('Sucursal obligatoria'),
  estado_usuario: Yup.number()
})

export const editUsuarioSchema = Yup.object({
  nombre_usuario: Yup.string().matches(/^[A-Za-z\u00C0-\u017F\s]{2,30}$/g, "Nombre inválido"),
  apellido_usuario: Yup.string().matches(/^[A-Za-z\u00C0-\u017F\s]{2,30}$/g, "Nombre inválido").required(),
  correo: Yup.string().email().required('Correo obligatorio'),
  contrasena: Yup.string().nullable().transform(value => value === '' ? null: value).min(6, "La contraseña debe tener al menos 6 caracteres"),
  privilegio: Yup.number().required('Obligatorio'),
  sucursal: Yup.number().required('Sucursal obligatoria'),
  estado_usuario: Yup.number()
})