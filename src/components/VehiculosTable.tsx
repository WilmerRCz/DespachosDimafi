import { getVehiculos } from "../api/resVehiculos";
import { useQuery } from "@tanstack/react-query";
function VehiculosTable() {
  const { data: vehiculos, isLoading, isError, error } = useQuery({
    queryKey: ["vehiculos"],
    queryFn: getVehiculos,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  return vehiculos.map(vehiculo =>(
    <div key={vehiculo.patente}>
      <h3>{vehiculo.patente}</h3>
      <p>{vehiculo.nombre_sucursal}</p>
      <p>{vehiculo.nombre_estado}</p>
    </div>
  ))


  }
export default VehiculosTable;
