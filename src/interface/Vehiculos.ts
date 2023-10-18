import { Key } from "react";

export interface Vehiculos {
  patente: string;
  sucursal_vehiculo: string;
  nombre_sucursal?: string
  estado_vehiculo: string;
  nombre_estado?: string
  fecha_creacion_vehiculo: string;
  fecha_modificacion_vehiculo: string;
}

export interface Vehiculoscard {
  patente: string;
  sucursal_vehiculo: string;
  nombre_sucursal: string
  estado_vehiculo: string;
  nombre_estado: string
  fecha_creacion_vehiculo: string;
  fecha_modificacion_vehiculo: string;
}