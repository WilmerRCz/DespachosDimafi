import { useQuery } from "@tanstack/react-query";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { getCelulares } from "../../api/resCelulares";
import { Celulares } from "../../interface/Celulares";

interface Props {
  valueCod?: string | number;
  valueCelular?: string | number;
  isEdit?: boolean;
  register: UseFormRegister<FieldValues>;
}
function SelectCelular({ valueCod, valueCelular, isEdit, register }: Props) {
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
        htmlFor="celular"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Celular <span className="text-xs text-slate-400">(optional)</span>
      </label>
      <div className="block w-full">
        <select
          {...register("codigo_celular_cliente", { valueAsNumber: true })}
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
          {...register("celular_cliente")}
          defaultValue={valueCelular}
          type="number"
          placeholder="9 0123 4567"
          className={
            "bg-gray-50 border border-gray-300 w-full sm:w-2/3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1"
          }
        />
      </div>
    </div>
  );
}

export default SelectCelular;
