import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getComunas } from '../api/resComunas';
import { Comunas } from '../interface/Comunas';

interface Props {
  value?: string | number
}

function SelectComuna({value}:Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Comunas"],
    queryFn: getComunas,
  });


  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;
  return (
    <div className="col-span-1">
      <label htmlFor="comunas" className="block mb-2 text-sm font-medium text-gray-900">Comunas</label>
      <select name="comunas" id="comunas" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1">     
        {data.map((comuna: Comunas) => (
          <option key={comuna.id_comuna} value={comuna.id_comuna}>{comuna.nombre_comuna}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectComuna