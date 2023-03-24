import { useQuery } from "@tanstack/react-query";
import { getEstadoDespacho } from "../../api/resEstadoDespacho";
import { EstadoDespacho } from "../../interface/EstadoDespacho";
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface Props {
  value?: string | number;
  isEdit?: boolean;
  isDisable?: boolean;
  register: UseFormRegister<FieldValues>
}

function SelectEstadoDespacho({ value, isEdit, isDisable, register }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["EstadoDespacho"],
    queryFn: getEstadoDespacho,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  const findEstado = data.find(
    (element: EstadoDespacho) => element.nombre_estado === value
  );

  return (
    <div className="col-span-1">
      <label
        htmlFor="estado_despacho"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Estado del despacho<span className="text-xs text-slate-400">(optional)</span>
      </label>
      {isDisable ? (
        <select
        {...register("estado_despacho", { valueAsNumber: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        >
          {isEdit ? (
            <option value={findEstado.id_estado}>
              {findEstado.nombre_estado}
            </option>
          ) : null}
        </select>
      ) : (
        <select
        {...register("estado_despacho", { valueAsNumber: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        >
          {isEdit ? (
            <option value={findEstado.id_estado}>
              {findEstado.nombre_estado}
            </option>
          ) : null}
          {data.map((estado: EstadoDespacho) => (
            <option key={estado.id_estado} value={estado.id_estado}>
              {estado.nombre_estado}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default SelectEstadoDespacho;
