import { UseFormRegister, FieldValues } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getTipoDocumento } from "../api/resTipoDocumento";
import { TipoDocumento } from "../interface/TipoDocumento";

interface Props {
  valueTipoDoc?: string;
  valueDoc?: string;
  isEdit?: boolean;
  register: UseFormRegister<FieldValues>;
}

function SelectTipoDocumento({
  valueTipoDoc,
  valueDoc,
  isEdit,
  register,
}: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["TipoDocumento"],
    queryFn: getTipoDocumento,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;
  const findDocumento = data.find(
    (element: TipoDocumento) => element.nombre_documento === valueTipoDoc
  );
  return (
    <div className="col-span-1">
      <label
        htmlFor="nro_documento"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        <span className="text-red-500">*</span>Tipo de documento
      </label>
      <div className="block w-full">
        <select
          {...register("tipo_documento", { valueAsNumber: true })}
          className="bg-gray-50 border border-gray-300 w-full sm:w-2/6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-1"
        >
          {isEdit ? (
            <option value={findDocumento.id_tipo_documento}>
              {findDocumento.nombre_documento}
            </option>
          ) : null}
          {data.map((documento: TipoDocumento) => (
            <option
              key={documento.id_tipo_documento}
              value={documento.id_tipo_documento}
            >
              {documento.nombre_documento}
            </option>
          ))}
        </select>
        <input
          {...register("nro_documento")}
          defaultValue={valueDoc}
          type="text"
          placeholder="435672"
          className={
            "bg-gray-50 border border-gray-300 w-full sm:w-2/3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1"
          }
        />
      </div>
    </div>
  );
}

export default SelectTipoDocumento;
