import React from 'react'
import useFormNewVehiculo from '../../hooks/useFormNewVehiculo';
import InputForDrawer from '../common/InputForDrawer'
import SelectEstadoActividad from '../common/SelectEstadoActividad';
import SelectSucursales from '../common/SelectSucursales';
interface Props {
  onClose: () => void
}

function FormNewVehiculo({onClose}: Props) {
  const { handleSubmit, register, onSubmit, errors } = useFormNewVehiculo({onClose});
  return (
    <form id='formNewVehiculo' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    onSubmit={handleSubmit(onSubmit)}>
        <InputForDrawer
        label="Patente"
        register={register}
        name="patente"
        placeholder="ABC123"
        type="text"
        required={true}
        errorMessage={errors.patente?.message}
      />
      <SelectSucursales register={register} name={"sucursal_vehiculo"}/>
    </form>
  )
}

export default FormNewVehiculo