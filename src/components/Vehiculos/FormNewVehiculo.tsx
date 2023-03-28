import React from 'react'
import useFormNewVehiculo from '../../hooks/useFormNewVehiculo';
import InputForDrawer from '../common/InputForDrawer'
import SelectSucursales from '../common/SelectSucursales';

function FormNewVehiculo() {
  const { handleSubmit, register, errors } = useFormNewVehiculo();
  return (
    <form id='formNewVehiculo' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <InputForDrawer
        label="Patente"
        register={register}
        name="patente"
        placeholder="ABC123"
        type="text"
        required={true}
        errorMessage={errors.patente?.message}
      />
      <SelectSucursales register={register} name={"nombre_sucursal"}/>

    </form>
  )
}

export default FormNewVehiculo