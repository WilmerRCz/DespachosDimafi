export function showDate(DATETIME: string) {
  try {
    const fecha = DATETIME?.slice(0, 10);
    const date = ordenarDate(fecha);
    return `${date}`;
  } catch (error) {
    return "";
  }
}

function ordenarDate(fecha: string) {
  const separarFecha = fecha.split("-");
  const day = separarFecha[2];
  const month = separarFecha[1];
  const year = separarFecha[0];
  const date = [day, month, year];
  const fechaOrdenada = date.join("-");
  return fechaOrdenada;
}
