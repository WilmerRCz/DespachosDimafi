import * as Yup from "yup";
const validationRut = /^\d{1,3}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
export const despachoSchema = Yup.object({
  nombre_cliente: Yup.string()
    .matches(/^[A-Za-z\u00C0-\u017F0-9\s]{3,60}$/g, "Nombre inválido")
    .trim()
    .min(3, "Por favor introducir un nombre válido")
    .max(60, "No se aceptan tantos caracteres")
    .required("El nombre es obligatorio"),
  rut_cliente_despacho: Yup.string()
    .matches(validationRut, "Rut inválido")
    .trim()
    .min(11, "Por favor introducir un rut válido")
    .max(12, "Rut invalido")
    .required("El rut es obligatorio"),
  direccion_calle_cliente: Yup.string()
    .matches(/^[A-Za-z\u00C0-\u017F0-9\s]{3,60}$/g, "Dirección inválida")
    .trim()
    .min(3, "Por favor introducir una dirección válida")
    .max(60, "Dirección muy larga")
    .required("La dirección es obligatoria"),
  nro_calle_cliente: Yup.string()
    .matches(/^[0-9]{0,15}$/g, "Número de calle inválido")
    .trim()
    .required("El número de calle es obligatorio"),
  apto_cliente: Yup.string()
    .matches(/^[0-9]{0,5}$/g, "Número de apto inválido")
    .nullable()
    .optional(),
  celular_cliente: Yup.string()
    .matches(/^[0-9]{0,12}$/g, "Número celular inválido")
    .nullable()
    .optional(),
  nro_documento: Yup.string()
    .matches(/^[0-9]{1,12}$/g, "Número de documento inválido")
    .required("El número de documento es obligatorio"),
  nro_oc: Yup.string()
    .matches(/^[A-Za-z0-9\u00C0-\u017F\s]{2,11}$/g, "Número de OC inválida")
    .trim()
    .required("La OC es obligatorio"),
  monto_venta: Yup.string()
    .matches(/^[0-9.]{0,12}$/g, "Monto de venta inválido")
    .required("El total es obligatorio"),
  comentario_despacho: Yup.string()
    .trim()
    .min(0, "Por favor introducir un comentario válido")
    .max(255, "Comentario excede capacidad máxima")
    .nullable()
    .optional(),
});
