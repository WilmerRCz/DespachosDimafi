export interface DecodedToken {
  nombre: string;
  apellido: string;
  privilegio: number;
  sucursal: number;
  auth: true;
  iat: number;
  exp: number;
}