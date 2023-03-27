export function findIndexInTable(nro_record:any, data: any){
  const idDespacho = data.findIndex((data: { id_despacho: any; }) => data.id_despacho === nro_record)
  return data[idDespacho]
}