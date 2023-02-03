import { getDespachos } from "../api/resDespachos";
import { useQuery } from "@tanstack/react-query";
import { Despachos } from '../interface/Despachos';
import TitlePage from "./TitlePage";

function DespachosTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["despachos"],
    queryFn: getDespachos
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  
  return (
    <div>
      <TitlePage title="Despachos:"/>
      {data.map((despacho: Despachos) => (
        <div key={despacho.id_despacho}>
          <h3>{despacho.nombre_cliente}</h3>
          <p>{despacho.rut_cliente_despacho}</p>
          <p>{despacho.usuario_despachador}</p>
          <p>{despacho.nombre_sucursal}</p>
          <p>{`${despacho.direccion_calle_cliente}, ${despacho.nro_calle_cliente} - ${despacho.nombre_comuna}`}</p>
          <p>{`${despacho.codigo_celular} ${despacho.celular_cliente}`}</p>
          <p>{`${despacho.nombre_documento} - ${despacho.nro_documento}`}</p>
          <p>{`OC: ${despacho.nro_oc}`}</p>
          <p>{despacho.patente}</p>
          <p>{`$${despacho.monto_venta}`}</p>
          <p>{despacho.comentario_despacho}</p>
          <p>{despacho.nombre_estado}</p>
          <p>{despacho.fecha_creacion_despacho}</p>
          <p>{despacho.fecha_modificacion_despacho}</p>
          <p>{despacho.fechayhora_comienzo_despacho}</p>
          <p>{despacho.fechayhora_termino_despacho}</p>
        </div>
      ))}
    </div>
  );
}

export default DespachosTable;
