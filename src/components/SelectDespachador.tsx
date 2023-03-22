import { useQuery } from '@tanstack/react-query';
import { getDespachadoresActivos } from '../api/resUsuarios';
import { Usuarios } from '../interface/Usuario';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface Props {
  value?: string | number
  isEdit?: boolean
  register: UseFormRegister<FieldValues>
}

function SelectDespachador({value, isEdit, register}:Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["DespachadoresActivos"],
    queryFn: getDespachadoresActivos,
  });


  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  const findDespachador = data.find((element: Usuarios) => `${element.nombre_usuario} ${element.apellido_usuario}` === value)

  return (
    <div className="col-span-1">
      <label htmlFor="usuario_despachador" className="block mb-2 text-sm font-medium text-gray-900">Despachadores</label>
      <select {...register("usuario_despachador", {valueAsNumber: true})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
      {isEdit ? <option value={findDespachador.id_usuario}>{`${findDespachador.nombre_usuario} ${findDespachador.apellido_usuario}`}</option> : null}
        {data.map((usuario: Usuarios) => (
          <option key={usuario.id_usuario} value={usuario.id_usuario}>{`${usuario.nombre_usuario} ${usuario.apellido_usuario}`}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectDespachador