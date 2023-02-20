import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getVehiculosActivos } from '../api/resVehiculos';
import { Vehiculos } from '../interface/Vehiculos';

function SelectPatente() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["VehiculosActivos"],
    queryFn: getVehiculosActivos,
  });


  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;
  return (
    <div className="col-span-1">
      <label htmlFor="patente" className="block mb-2 text-sm font-medium text-gray-900">Patente</label>
      <select name="patente" id="patente" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
        {data.map((vehiculo: Vehiculos) => (
          <option key={vehiculo.patente} value={vehiculo.patente}>{vehiculo.patente}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectPatente