
import { Sucursales } from '../../interface/Sucursales';
import InputForDrawer from '../common/InputForDrawer';
import SelectEstadoActividad from '../common/SelectEstadoActividad';
import useFormEditSucursal from './hooks/useFormEditSucursal';

interface Props {
  onClose: () => void;
  dataSucursal: Sucursales
}

function FormEditSucursal({onClose, dataSucursal}:Props) {
  const { handleSubmit, onSubmit, register, errors} =  useFormEditSucursal({onClose, dataSucursal})
  
  return (
    <form id="formEditSucursal" className="grid grid-cols-1 gap-4"
    onSubmit={handleSubmit(onSubmit)}>
      <button
        type="submit"
        className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 mx-2 border-2 border-green-600 hover:text-white shadow-md"
      >
        Editar
      </button>      
      <InputForDrawer
      label="Nombre de la Sucursal"
      register={register}
      name="nombre_sucursal"
      placeholder="Casa Matriz"
      type="text"
      required={true}
      defaultValue={dataSucursal.nombre_sucursal}
      errorMessage={errors.nombre_sucursal?.message}
      />
      <SelectEstadoActividad name={"estado_sucursal"} nameLabel='Estado sucursal' register={register} isEdit={true} value={dataSucursal.nombre_estado}/>
    </form>
  )
}

export default FormEditSucursal