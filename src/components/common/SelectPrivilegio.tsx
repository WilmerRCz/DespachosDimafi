import { useQuery } from "@tanstack/react-query";
import { Comunas } from "../../interface/Comunas";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { getPrivilegios } from "../../api/resPrivilegios";
import { PrivilegioUsuarios } from "../../interface/Usuario";
import SpinnerLoading from './SpinnerLoading'

interface Props<T extends FieldValues> {
  value?: string | number;
  isEdit?: boolean;
  name: Path<T>
  register: UseFormRegister<T>;
}

function SelectPrivilegio<T extends FieldValues>({ value, isEdit ,name, register }: Props<T>) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Privilegios"],
    queryFn: getPrivilegios,
  });

  if (isLoading) return <SpinnerLoading size={12} isSelect/>
  else if (isError) return <div>Error: desde react query</div>

  const findPrivilegio:PrivilegioUsuarios  = data.find(
    (element: PrivilegioUsuarios) => element.privilegio === value
  )
  
  return (
    <div className="col-span-1">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Privilegio<span className="text-red-500">*</span>
      </label>
      <select
        {...register(name, { valueAsNumber: true })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
      >
        {isEdit && (
          <option value={findPrivilegio.id_privilegios}>
            {findPrivilegio.privilegio}
          </option>
        )}
        {data.map((privilegios: PrivilegioUsuarios) => (
          <option key={privilegios.id_privilegios} value={privilegios.id_privilegios}>
            {privilegios.privilegio}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectPrivilegio
