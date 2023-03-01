export interface Despachos {
  id_despacho?: number;
  usuario_despachador: number;
  sucursal_despacho: number;
  nombre_cliente: string;
  rut_cliente_despacho: string;
  direccion_calle_cliente: string;
  nro_calle_cliente: number;
  apto_cliente?: number;
  comuna_cliente: number;
  //nombre_comuna for view tableDespacho
  nombre_comuna?: string;
  codigo_celular_cliente: number;
  celular_cliente?: string | null;
  tipo_documento: number;
  nro_documento: string;
  nro_oc: string;
  vehiculo_despacho: string;
  monto_venta: string;
  comentario_despacho?: string | null;
  nombre_estado?: string;
  fecha_creacion_despacho?: string;
  fecha_modificacion_despacho?: string;
  fechayhora_comienzo_despacho?: string;
  fechayhora_termino_despacho?: string;
}
