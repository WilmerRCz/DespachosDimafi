import { useQuery } from "@tanstack/react-query";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { getVehiculosActivos } from "../../api/resVehiculos";
import { Vehiculos } from "../../interface/Vehiculos";

interface Props<T extends FieldValues> {
  value?: string | number;
  name: Path<T>;
  isEdit?: boolean;
  register: UseFormRegister<T>;
}

function SelectPatente<T extends FieldValues>({
  value,
  isEdit,
  name,
  register,
}: Props<T>) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["VehiculosActivos"],
    queryFn: getVehiculosActivos,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  const findVehiculo = data.find(
    (element: Vehiculos) => element.patente === value
  );

  return (
    <div className="col-span-1">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        <span className="text-red-500">*</span>Patente
      </label>
      <select
        {...register(name)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
      >
        {isEdit ? (
          <option value={findVehiculo.patente}>{findVehiculo.patente}</option>
        ) : null}
        {data.map((vehiculo: Vehiculos) => (
          <option key={vehiculo.patente} value={vehiculo.patente}>
            {vehiculo.patente}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectPatente;
