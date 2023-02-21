import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCelulares } from "../api/resCelulares";
import { Celulares } from "../interface/Celulares";

function SelectCelular() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Celulares"],
    queryFn: getCelulares,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;
  return (
    <div className="col-span-1">
      <label
        htmlFor="celular"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Celular
      </label>
      <div className="block w-full">
        <select
          name="codigo_celular"
          id="codigo_celular"
          className="bg-gray-50 border border-gray-300 w-full sm:w-2/6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-1"
        >
          {data.map((celular: Celulares) => (
            <option key={celular.id} value={celular.id}>
              {celular.codigo_celular}
            </option>
          ))}
        </select>
        <input
        id="celular"
        name="celular"
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
