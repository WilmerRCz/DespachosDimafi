import { getSucursales } from "../../api/resSucursales";
import { useQuery } from "@tanstack/react-query";
import { Sucursales } from '../../interface/Sucursales';
import TitlePage from "../TitlePage";

function SucursalesTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sucursales"],
    queryFn: getSucursales,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  return (
    <div>
      <TitlePage title="Sucursales:"/>
      {data.map((sucursal: Sucursales) => (
        <div key={sucursal.id_sucursal}>
          <h2>{sucursal.id_sucursal}</h2>
          <h3>{sucursal.nombre_sucursal}</h3>
          <p>{sucursal.nombre_estado}</p>
          <p>{sucursal.fecha_creacion_sucursal}</p>
          <p>{sucursal.fecha_modificacion_sucursal}</p>
        </div>
      ))}
    </div>
  );
}

export default SucursalesTable;