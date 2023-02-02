import { getUsuarios } from "../api/resUsuarios";
import { useQuery } from "@tanstack/react-query";
import { Usuarios } from "../interface/Usuario";

function UsuariosTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["usuarios"],
    queryFn: getUsuarios,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  return (
    <div>
      <h1>UsuariosTable</h1>
      {data.map((usuario: Usuarios) => (
        <div key={usuario.id_usuario}>
          <h3>{`${usuario.nombre_usuario}  ${usuario.apellido_usuario}`}</h3>
          <p>{usuario.correo}</p>
          <p>{usuario.nombre_sucursal}</p>
          <p>{usuario.nombre_estado}</p>
          <p>{usuario.privilegio}</p>
          <p>{usuario.fecha_creacion_usuario}</p>
          <p>{usuario.fecha_modificacion_usuario}</p>
        </div>
      ))}
    </div>
  );
}

export default UsuariosTable;
