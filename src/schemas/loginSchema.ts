import * as Yup from "yup";
export const loginSchema = Yup.object({
  correo: Yup.string().email('Debe ser un correo valido')
  .trim()
  .required(),
  contrasena: Yup.string().min(6, 'La contraseña es requerida')
})