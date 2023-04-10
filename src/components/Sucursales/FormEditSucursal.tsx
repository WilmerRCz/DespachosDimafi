
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
      <SelectEstadoActividad name={"estado_sucursal"} register={register} isEdit={true} value={dataSucursal.nombre_estado}/>
    </form>
  )
}

export default FormEditSucursal