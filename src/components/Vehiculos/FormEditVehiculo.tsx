import SelectSucursales from '../common/SelectSucursales'
import useFormEditVehiculo from './hooks/useFormEditVehiculo'
import { Vehiculos } from '../../interface/Vehiculos';
import SelectEstadoActividad from '../common/SelectEstadoActividad';

interface Props {
  onClose: () => void;
  dataVehiculo: Vehiculos
}

function FormEditVehiculo({onClose, dataVehiculo}:Props) {
const { handleSubmit, onSubmit, register} =  useFormEditVehiculo({onClose, dataVehiculo})
  return (
    <form id="formEditVehiculo" className="grid grid-cols-1 gap-4"
    onSubmit={handleSubmit(onSubmit)}>
      <button
        type="submit"
        className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 mx-2 border-2 border-green-600 hover:text-white shadow-md"
      >
        Editar
      </button>      
      <SelectSucursales name={"sucursal_vehiculo"}
        register={register}
        isEdit={true}
        value={dataVehiculo.nombre_sucursal}
      />
      <SelectEstadoActividad name={"estado_vehiculo"} nameLabel='Estado vehiculo' register={register} isEdit={true} value={dataVehiculo.nombre_estado}/>
    </form>
  )
}

export default FormEditVehiculo