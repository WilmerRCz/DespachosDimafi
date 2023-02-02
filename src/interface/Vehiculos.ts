import { Key } from "react";

export interface Vehiculos {
  patente: Key;
  nombre_sucursal: string;
  nombre_estado: string;
  fecha_creacion_vehiculo?: string;
  fecha_modificacion_vehiculo?: string;
}
