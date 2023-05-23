import React from 'react'
import useFormNewUsuario from './hooks/useFormNewUsuario';
import InputForDrawer from '../common/InputForDrawer';

interface Props {
  onClose: () => void
}

function FormNewUsuario ({onClose}: Props) {
  const { handleSubmit, register, onSubmit, errors } = useFormNewUsuario({onClose});
  return (
    <form id='formNewUsuario' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      onSubmit={handleSubmit(onSubmit)}>
        <InputForDrawer
        label="Nombre"
        register={register}
        name="nombre_usuario"
        placeholder="Nombre"
        type="text"
        required={true}
        errorMessage={errors.nombre_usuario?.message}
      />
    </form>
  )
}

export default FormNewUsuario
