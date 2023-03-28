import { useQuery } from "@tanstack/react-query";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { getCelulares } from "../../api/resCelulares";
import { Celulares } from "../../interface/Celulares";

interface Props<T extends FieldValues> {
  valueCod?: string | number;
  name: Path<T>
  celular_cliente: Path<T>
  valueCelular?: string | number;
  isEdit?: boolean;
  register: UseFormRegister<T>;
  errorMessage?: string;
}
function SelectCelular<T extends FieldValues>({
  valueCod,
  valueCelular,
  name,
  celular_cliente,
  isEdit,
  register,
  errorMessage,
}: Props<T>) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Celulares"],
    queryFn: getCelulares,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  const findCod = data.find(
    (element: Celulares) => element.codigo_celular === valueCod
  );

  return (
    <div className="col-span-1">
      <label
        htmlFor={celular_cliente}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Celular <span className="text-xs text-slate-400">(optional)</span>
      </label>
      <div className="block w-full">
        <select
          {...register(name, { valueAsNumber: true })}
          className="bg-gray-50 border border-gray-300 w-full sm:w-2/6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-1"
        >
          {isEdit ? (
            <option value={findCod.id}>{findCod.codigo_celular}</option>
          ) : null}
          {data.map((celular: Celulares) => (
            <option key={celular.id} value={celular.id}>
              {celular.codigo_celular}
            </option>
          ))}
        </select>
        <input
          {...register(celular_cliente)}
          defaultValue={valueCelular}
          type="text"
          placeholder="9 0123 4567"
          className={
            "bg-gray-50 border border-gray-300 w-full sm:w-2/3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1"
          }
        />
        {errorMessage && (
          <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
        )}
      </div>
    </div>
  );
}

export default SelectCelular;
