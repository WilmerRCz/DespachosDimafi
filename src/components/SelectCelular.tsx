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
        htmlFor="patente"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Celular
      </label>
      <div className="block">
        <select
          name="patente"
          id="patente"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-1"
        >
          {data.map((celular: Celulares) => (
            <option key={celular.id} value={celular.id}>
              {celular.codigo_celular}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="9 0123 4567"
          className={
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1"
          }
        />
      </div>
    </div>
  );
}

export default SelectCelular;
