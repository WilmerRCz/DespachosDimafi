import { useQuery } from "@tanstack/react-query";
import { getComunas } from "../../api/resComunas";
import { Comunas } from "../../interface/Comunas";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import SpinnerLoading from './SpinnerLoading'

interface Props<T extends FieldValues> {
  value?: string | number;
  isEdit?: boolean;
  name: Path<T>
  register: UseFormRegister<T>;
}

function SelectComuna<T extends FieldValues>({ value, isEdit ,name, register }: Props<T>) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Comunas"],
    queryFn: getComunas,
  });

  if (isLoading) return <SpinnerLoading size={12} isSelect/>
  else if (isError) return <div>Error: desde react query</div>;

  const findComuna = data.find(
    (element: Comunas) => element.nombre_comuna === value
  );
  return (
    <div className="col-span-1">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Comunas<span className="text-red-500">*</span>
      </label>
      <select
        {...register(name, { valueAsNumber: true })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
      >
        {isEdit ? (
          <option value={findComuna.id_comuna}>
            {findComuna.nombre_comuna}
          </option>
        ) : null}
        {data.map((comuna: Comunas) => (
          <option key={comuna.id_comuna} value={comuna.id_comuna}>
            {comuna.nombre_comuna}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectComuna;
