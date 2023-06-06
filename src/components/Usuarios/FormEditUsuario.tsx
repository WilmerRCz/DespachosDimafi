import InputForDrawer from "../common/InputForDrawer";
import SelectSucursales from "../common/SelectSucursales";
import SelectPrivilegio from "../common/SelectPrivilegio";
import SelectEstadoActividad from "../common/SelectEstadoActividad";
import { Usuarios } from "../../interface/Usuario";
import useFormEditUsuario from "./hooks/useFormEditUsuario";

interface Props {
  onClose: () => void
  dataUsuario: Usuarios
}

function FormEditUsuario({ onClose, dataUsuario }: Props) {
  const { handleSubmit, register, onSubmit, errors } = useFormEditUsuario({onClose, dataUsuario});

  return (
    <form
      id={`formEditUsuario`}
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-4"
    >
      <InputForDrawer
        label="Nombre"
        register={register}
        name="nombre_usuario"
        placeholder="Nombre"
        type="text"
        required={true}
        defaultValue={dataUsuario.nombre_usuario}
        errorMessage={errors.nombre_usuario?.message}
      />
      <InputForDrawer
        label="Apellido"
        register={register}
        name="apellido_usuario"
        placeholder="Apellido"
        type="text"
        required={true}
        defaultValue={dataUsuario.apellido_usuario}
        errorMessage={errors.apellido_usuario?.message}
      />
      <InputForDrawer
        label="Correo"
        register={register}
        name="correo"
        placeholder="Correo"
        type="email"
        required={true}
        defaultValue={dataUsuario.correo}
        errorMessage={errors.correo?.message}
      />
      <InputForDrawer
        label="Contrasena"
        register={register}
        name="contrasena"
        placeholder="*******"
        type="password"
        optional
        errorMessage={errors.contrasena?.message}
      />
      <SelectSucursales
        register={register}
        name={"sucursal"}
        value={dataUsuario.nombre_sucursal}
      />
      <SelectPrivilegio
        register={register}
        name={"privilegio"}
        isEdit={true}
        value={dataUsuario.privilegio}
      />
      <SelectEstadoActividad
        name={"estado_usuario"}
        nameLabel="Estado usuario"
        register={register}
        isEdit={true}
        value={dataUsuario.nombre_estado}
      />
    </form>
  );
}

export default FormEditUsuario;
