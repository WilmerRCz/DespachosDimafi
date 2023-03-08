export interface Despachos {
  id_despacho?: number;
  usuario_despachador?: number;
  sucursal_despacho?: number;
  //nombre_sucursal for component selectSucrusales in editDespacho
  nombre_sucursal?: string;
  nombre_cliente?: string;
  rut_cliente_despacho?: string;
  direccion_calle_cliente?: string;
  nro_calle_cliente?: number;
  apto_cliente?: number;
  comuna_cliente?: number;
  //nombre_comuna for view tableDespacho
  nombre_comuna?: string;
  codigo_celular_cliente?: number;
  //codigo_celular for component selectComuna in editDespacho
  codigo_celular?: number;
  celular_cliente?: string;
  tipo_documento?: number;
  //nombre_documento for component selectTipoDocumento in editDespacho
  nombre_documento?: string;
  nro_documento?: string;
  nro_oc?: string;
  vehiculo_despacho?: string;
  //patente for component selectPatente in editDespacho
  patente?: string;
  monto_venta?: string;
  comentario_despacho?: string;
  nombre_estado?: string;
  estado_despacho?: number;
  estado_actividad?: number
  fecha_creacion_despacho?: string;
  fecha_modificacion_despacho?: string;
  fechayhora_comienzo_despacho?: string;
  fechayhora_termino_despacho?: string;
}
