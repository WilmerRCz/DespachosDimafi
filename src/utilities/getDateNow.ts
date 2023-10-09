export const getDateNow = () => {
  const date = new Date();

  // Obtener las partes de la fecha y hora
  const año = date.getFullYear();
  const mes = String(date.getMonth() + 1).padStart(2, '0'); // Mes comienza en 0
  const dia = String(date.getDate()).padStart(2, '0');
  const horas = String(date.getHours()).padStart(2, '0');
  const minutos = String(date.getMinutes()).padStart(2, '0');
  const segundos = String(date.getSeconds()).padStart(2, '0');

  // Crear la cadena de fecha y hora en el formato deseado
  const dateNow = `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;

  // console.log(dateNow);
  return dateNow;
}