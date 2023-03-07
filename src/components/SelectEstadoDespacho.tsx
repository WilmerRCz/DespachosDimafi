import { useQuery } from '@tanstack/react-query';
import { getEstadoDespacho } from "../api/resEstadoDespacho";
import { EstadoDespacho } from "../interface/EstadoDespacho";

interface Props {
  value?: string | number
  isEdit?: boolean
}

function SelectEstadoDespacho({value, isEdit}:Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["EstadoDespacho"],
    queryFn: getEstadoDespacho,
  });


  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  const findEstado = data.find((element: EstadoDespacho) => element.nombre_estado === value)

  return (
    <div className="col-span-1">
      <label
        htmlFor="estado_despacho"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Estado del despacho
      </label>
        <select
          name="estado_despacho"
          id="estado_despacho"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        >
          {isEdit ? <option value={findEstado.id_estado}>{findEstado.nombre_estado}</option> : null}
          {data.map((estado: EstadoDespacho) => (
          <option key={estado.id_estado} value={estado.id_estado}>{estado.nombre_estado}</option>
        ))}
        </select>
    </div>
  );
}

export default SelectEstadoDespacho;
