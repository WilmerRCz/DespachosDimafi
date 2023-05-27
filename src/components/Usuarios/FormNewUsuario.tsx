import React from 'react'
import useFormNewUsuario from './hooks/useFormNewUsuario';
import InputForDrawer from '../common/InputForDrawer';
import SelectSucursales from '../common/SelectSucursales';
import SelectPrivilegio from '../common/SelectPrivilegio';

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
      <InputForDrawer
        label="Apellido"
        register={register}
        name="apellido_usuario"
        placeholder="Apellido"
        type="text"
        required={true}
        errorMessage={errors.apellido_usuario?.message}
      />
      <InputForDrawer
        label="Correo"
        register={register}
        name="correo"
        placeholder="Correo"
        type="email"
        required={true}
        errorMessage={errors.correo?.message}
      />
      <InputForDrawer
        label="Contrasena"
        register={register}
        name="contrasena"
        placeholder="*******"
        type="password"
        required={true}
        errorMessage={errors.contrasena?.message}
      />
      <SelectSucursales register={register} name={"sucursal"}/>
      <SelectPrivilegio register={register} name='privilegio'/>
    </form>
  )
}

export default FormNewUsuario
