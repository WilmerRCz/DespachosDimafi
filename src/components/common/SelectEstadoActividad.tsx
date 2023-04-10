import { useQuery } from "@tanstack/react-query";
import { EstadoActividad } from "../../interface/EstadoDespacho";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { getEstadoActividad } from "../../api/resEstadoActividad";

interface Props<T extends FieldValues> {
  value?: string | number;
  name: Path<T>;
  isEdit?: boolean;
  isDisable?: boolean;
  register: UseFormRegister<T>;
}

function SelectEstadoActividad<T extends FieldValues>({
  value,
  isEdit,
  isDisable,
  name,
  register,
}: Props<T>) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["EstadoActividad"],
    queryFn: getEstadoActividad,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  const findEstado = data.find(
    (element: EstadoActividad) => element.nombre_estado === value
  );

  return (
    <div className="col-span-1">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Estado del despacho
        <span className="text-xs text-slate-400">(optional)</span>
      </label>
      {isDisable ? (
        <select
          {...register(name, { valueAsNumber: true })}
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
          {...register(name, { valueAsNumber: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        >
          {isEdit ? (
            <option value={findEstado.id_estado}>
              {findEstado.nombre_estado}
            </option>
          ) : null}
          {data.map((estado: EstadoActividad) => (
            <option key={estado.id_estado} value={estado.id_estado}>
              {estado.nombre_estado}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default SelectEstadoActividad;
