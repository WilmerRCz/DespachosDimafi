import { getDespachos } from "../api/resDespachos";
import { useQuery } from "@tanstack/react-query";
import { Despachos } from "../interface/Despachos";
import TitlePage from "./TitlePage";



function DespachosTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["despachos"],
    queryFn: getDespachos,
  });


  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  return (
    <div>
      <TitlePage title="Despachos:" />
       
      <table className="w-full ">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Toggle</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Nro</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Cliente</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Rut</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Dirección</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Celular</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Documento</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">OC</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Despachador</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Patente</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Sucursal</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Estado</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Total</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Creación</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Modificación</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Inicio</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Termino</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((despacho: Despachos) => (
            <tr key={despacho.id_despacho}>
              <td className="p-3 text-sm text-gray-700"></td>
              <td className="p-3 text-sm font-bold text-red-500">{despacho.id_despacho}</td>
              <td className="p-3 text-sm text-gray-700">{despacho.nombre_cliente}</td>
              <td className="p-3 text-sm text-gray-700">{despacho.rut_cliente_despacho}</td>
              <td className="p-3 text-sm text-gray-700">{`${despacho.direccion_calle_cliente}, ${despacho.nro_calle_cliente} - ${despacho.nombre_comuna}`}</td>
              <td className="p-3 text-sm text-gray-700">{`${despacho.codigo_celular} ${despacho.celular_cliente}`}</td>
              <td className="p-3 text-sm text-gray-700">{`${despacho.nombre_documento} - ${despacho.nro_documento}`}</td>
              <td className="p-3 text-sm text-gray-700">{despacho.nro_oc}</td>
              <td className="p-3 text-sm text-gray-700">{despacho.usuario_despachador}</td>
              <td className="p-3 text-sm text-gray-700">{despacho.patente}</td>
              <td className="p-3 text-sm text-gray-700">{despacho.nombre_sucursal}</td>
              <td className="p-3 text-sm text-gray-700">{despacho.nombre_estado}</td>
              <td className="p-3 text-sm text-gray-700">{`$${despacho.monto_venta}`}</td>
              <td className="p-3 text-sm text-gray-700">{despacho.fecha_creacion_despacho}</td>
              <td className="p-3 text-sm text-gray-700">{despacho.fecha_modificacion_despacho}</td>
              <td className="p-3 text-sm text-gray-700">im,ki,tui{despacho.fechayhora_comienzo_despacho}</td>
              <td className="p-3 text-sm text-gray-700">i,tui,tiu,tui{despacho.fechayhora_termino_despacho}</td>
              <td className="p-3 text-sm text-gray-700"><button>Editar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DespachosTable;
