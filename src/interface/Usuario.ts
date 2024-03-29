export interface Usuarios {
  id_usuario: number
  nombre_usuario: string
  apellido_usuario: string
  correo: string
  contrasena: string
  privilegio: string
  nombre_sucursal: string
  sucursal: number
  nombre_estado: string
  estado_usuario: number
  fecha_creacion_usuario: string
  fecha_modificacion_usuario: string
}

export interface PrivilegioUsuarios {
  id_privilegios: number,
  privilegio: string
}

export interface Usuarioscard {
  id_usuario: number
  nombre_usuario: string
  apellido_usuario: string
  correo: string
  privilegio: string
  nombre_sucursal: string
  nombre_estado: string
  fecha_creacion_usuario: string
  fecha_modificacion_usuario: string
}