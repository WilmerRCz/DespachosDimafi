import React from "react";
import { FiEdit3 } from "react-icons/fi";
import useModal from "../../hooks/useModal";
import { Drawer, Space } from "antd";
import InputForDrawer from "../common/InputForDrawer";
import SelectSucursales from "../common/SelectSucursales";
import SelectPrivilegio from "../common/SelectPrivilegio";
import useFormEditUsuario from "./hooks/useFormEditUsuario";
import { Usuarios } from "../../interface/Usuario";
import SelectEstadoActividad from "../common/SelectEstadoActividad";
interface Props {
  nro_record: any;
  data: any;
  sizeButton: number;
  sizeDrawer: number | string;
}

function ButtonEditUsuario({
  nro_record,
  data,
  sizeButton,
  sizeDrawer,
}: Props) {
  const findUser = data.findIndex((data: { id_usuario: any; }) => data.id_usuario === nro_record)
  const { open, showDrawer, onClose } = useModal();
  const { handleSubmit, register, onSubmit, errors } = useFormEditUsuario({ onClose });
  const dataUsuario: Usuarios = data[findUser]
  return (
    <div>
      <button>
        <FiEdit3 size={sizeButton} color={"#FFC300"} onClick={showDrawer} />
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Drawer
          title={"Editar Usuario"}
          placement={"right"}
          width={sizeDrawer}
          onClose={onClose}
          open={open}
          maskClosable={true}
          extra={
            <Space>
              <button
                className="bg-red-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-red-600 hover:text-white shadow-md"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
              >
                Editar
              </button>
            </Space>
          }
        >
          <div className="grid grid-cols-1 gap-4">
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
            <SelectSucursales register={register} name={"sucursal"} value={dataUsuario.nombre_sucursal}/>
            <SelectPrivilegio register={register} name={"privilegio"} isEdit={true} value={dataUsuario.privilegio}/>
            <SelectEstadoActividad name={"estado_usuario"} nameLabel='Estado usuario' register={register} isEdit={true} value={dataUsuario.nombre_estado}/>
          </div>
        </Drawer>
      </form>
    </div>
  );
}

export default ButtonEditUsuario;
