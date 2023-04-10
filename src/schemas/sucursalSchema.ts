import * as Yup from "yup";
export const sucursalSchema = Yup.object({
  nombre_sucursal: Yup.string().matches(/^[A-Za-z\u00C0-\u017F\s]{3,30}$/g, 'Nombre de sucursal inválida')
  .trim()
  .required(),
  estado_sucursal: Yup.number().optional(),
})