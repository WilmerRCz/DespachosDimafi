import * as Yup from "yup";
export const vehiculoSchema = Yup.object({
  patente: Yup.string().matches(/^[A-Za-z0-9]{6,6}$/g, 'Patente inválida')
  .trim()
  .required(),
  sucursal_vehiculo: Yup.number().required('Campo Obligatorio'),
  nombre_estado: Yup.number().optional()
})