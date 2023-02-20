export interface Despachos {
  id_despacho: number,
  usuario_despachador: string,
  nombre_sucursal: string,
  nombre_cliente: string,
  rut_cliente_despacho: string,
  direccion_calle_cliente: string,
  nro_calle_cliente: number,
  apto_cliente: number,
  nombre_comuna: string,
  codigo_celular: string,
  celular_cliente?: string,
  nombre_documento: string,
  nro_documento: string,
  nro_oc: string,
  patente: string,
  monto_venta: string,
  comentario_despacho: string
  nombre_estado: string,
  fecha_creacion_despacho: string,
  fecha_modificacion_despacho: string,
  fechayhora_comienzo_despacho: string 
  fechayhora_termino_despacho: string 
}