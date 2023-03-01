export function findIndexInTable(record:any){
  const nroRecord = record.record.nro
  const data = record.data;
  const idDespacho = data.findIndex((data: { id_despacho: any; }) => data.id_despacho === nroRecord)
  return record.data[idDespacho]
}