import React from 'react'
import InputForDrawer from '../common/InputForDrawer'
import SelectSucursales from '../common/SelectSucursales'
import useFormEditVehiculo from '../../hooks/useFormEditVehiculo'
import { Vehiculos } from '../../interface/Vehiculos';

interface Props {
  onClose: () => void;
  dataVehiculo: Vehiculos
}

function FormEditVehiculo({onClose, dataVehiculo}:Props) {
const { handleSubmit, onSubmit, register} =  useFormEditVehiculo({onClose})
  return (
    <form id='formEditVehiculo' className="grid grid-cols-1 gap-4"
    onSubmit={handleSubmit(onSubmit)}>
      <SelectSucursales name={"sucursal_vehiculo"}
        register={register}
        isEdit={true}
        value={dataVehiculo.nombre_sucursal}
      />
    </form>
  )
}

export default FormEditVehiculo