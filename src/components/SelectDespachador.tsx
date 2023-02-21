import { useQuery } from '@tanstack/react-query';
import { getDespachadoresActivos } from '../api/resUsuarios';
import { Usuarios } from '../interface/Usuario';

function SelectDespachador() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["DespachadoresActivos"],
    queryFn: getDespachadoresActivos,
  });


  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;
  return (
    <div className="col-span-1">
      <label htmlFor="despachador" className="block mb-2 text-sm font-medium text-gray-900">Despachadores</label>
      <select name="despachador" id="despachador" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
        {data.map((usuario: Usuarios) => (
          <option key={usuario.id_usuario} value={usuario.id_usuario}>{`${usuario.nombre_usuario} ${usuario.apellido_usuario}`}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectDespachador