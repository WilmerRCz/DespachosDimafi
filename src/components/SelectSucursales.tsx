import { useQuery } from "@tanstack/react-query";
import { getSucursalesActivas } from "../api/resSucursales";
import { Sucursales } from "../interface/Sucursales";

function SelectSucursales() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sucursalesActivas"],
    queryFn: getSucursalesActivas,
  });


  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;
  return (
    <div className="col-span-1">
      <label htmlFor="sucursales" className="block mb-2 text-sm font-medium text-gray-900">Sucursales</label>
      <select name="" id="sucursales" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
        {data.map((sucursal: Sucursales) => (
          <option key={sucursal.id_sucursal} value={sucursal.id_sucursal}>{sucursal.nombre_sucursal}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectSucursales;
