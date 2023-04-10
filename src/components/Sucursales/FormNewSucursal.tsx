import React from 'react'
import useFormNewSucursal from './hooks/useFormNewSucursal';
import InputForDrawer from '../common/InputForDrawer';

interface Props {
  onClose: () => void
}

function FormNewSucursal({onClose}: Props) {
  const { handleSubmit, register, onSubmit, errors } = useFormNewSucursal({onClose});
  return (
    <form id='formNewSucursal' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    onSubmit={handleSubmit(onSubmit)}>
        <InputForDrawer
        label="Nombre de la Sucursal"
        register={register}
        name="nombre_sucursal"
        placeholder="Casa Matriz"
        type="text"
        required={true}
        errorMessage={errors.nombre_sucursal?.message}
      />
    </form>
  )
}

export default FormNewSucursal