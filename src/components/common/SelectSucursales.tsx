import { useQuery } from "@tanstack/react-query";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { getSucursalesActivas } from "../../api/resSucursales";
import { Sucursales } from "../../interface/Sucursales";

interface Props<T extends FieldValues> {
  value?: string | number;
  name: Path<T>;
  isEdit?: boolean;
  register: UseFormRegister<T>;
}

function SelectSucursales<T extends FieldValues>({
  value,
  isEdit,
  name,
  register,
}: Props<T>) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sucursalesActivas"],
    queryFn: getSucursalesActivas,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  const findSucursal = data.find(
    (element: Sucursales) => element.nombre_sucursal === value
  );

  return (
    <div className="col-span-1">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        <span className="text-red-500">*</span>Sucursales
      </label>
      <select
        {...register(name, { valueAsNumber: true })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
      >
        {isEdit ? (
          <option value={findSucursal.id_sucursal}>
            {findSucursal.nombre_sucursal}
          </option>
        ) : null}
        {data.map((sucursal: Sucursales) => (
          <option key={sucursal.id_sucursal} value={sucursal.id_sucursal}>
            {sucursal.nombre_sucursal}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectSucursales;
