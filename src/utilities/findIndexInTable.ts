export function findIndexInTable(nro_record:any, data: any){
  try {
    const idDespacho = data.findIndex((data: { id_despacho: any; }) => data.id_despacho === nro_record)
    return data[idDespacho]
  } catch (error) {
    console.log("Ocurrio un error al conseguir el id")
  }

}