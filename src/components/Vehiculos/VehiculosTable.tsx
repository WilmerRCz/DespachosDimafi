import { getVehiculos } from "../../api/resVehiculos";
import { useQuery } from "@tanstack/react-query";
import { Vehiculos } from "../../interface/Vehiculos";
import TitlePage from '../TitlePage';

function VehiculosTable() {
  const { data, isLoading, isError} = useQuery({
    queryKey: ["vehiculos"],
    queryFn: getVehiculos,
    
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  return (
    <div>
      <TitlePage title="Vehiculos:"/>
      {data.map((vehiculo: Vehiculos) => (
        <div key={vehiculo.patente}>
          <h3>{vehiculo.patente}</h3>
          <p>{vehiculo.nombre_sucursal}</p>
          <p>{vehiculo.nombre_estado}</p>
          <p>{vehiculo.fecha_creacion_vehiculo}</p>
          <p>{vehiculo.fecha_modificacion_vehiculo}</p>
        </div>
      ))}
    </div>
  );
}
export default VehiculosTable;
