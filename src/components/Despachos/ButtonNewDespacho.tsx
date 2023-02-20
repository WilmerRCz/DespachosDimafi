import { useState } from "react";
import { Drawer, Select, Space } from "antd";
import SelectSucursales from "../SelectSucursales";
import InputForDrawer from "../InputForDrawer";
import TextAreaForDrawer from "../TextAreaForDrawer";
import SelectDespachador from "../SelectDespachador";
import SelectPatente from "../SelectPatente";
import SelectComuna from "../SelectComuna";
import SelectCelular from "../SelectCelular";
import SelectTipoDocumento from "../SelectTipoDocumento";

function ButtonNewDespacho() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <button
        onClick={showDrawer}
        className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
      >
        Nuevo
      </button>
      <Drawer
        title="Crea un nuevo despacho"
        placement={"bottom"}
        height={500}
        onClose={onClose}
        open={open}
        maskClosable={false}
        extra={
          <Space>
            <button
              className="bg-red-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-red-600 hover:text-white shadow-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
              onClick={onClose}
            >
              Crear
            </button>
          </Space>
        }
      >
        <div>
          <form className="grid md:grid-cols-4 gap-4" action="">
            <InputForDrawer label="Rut" placeholder="01.123.456-7" type="text"/>
            <InputForDrawer label="Nombre Cliente" placeholder="" type="text"/>
            <InputForDrawer label="Calle" placeholder="" type="text"/>
            <InputForDrawer label="Número de calle" placeholder="4574" type="text"/>
            <InputForDrawer label="Apto/Piso/Block" placeholder="205" type="text"/>
            <SelectComuna/>
            <SelectCelular/>
            <SelectTipoDocumento/>
            <InputForDrawer label="Orden de Compra" placeholder="" type="text"/>
            <SelectDespachador/>
            <SelectPatente/>
            <SelectSucursales/>
            <InputForDrawer label="Total" placeholder="$" type="number"/>
            <TextAreaForDrawer label="Comentario" placeholder=""/>
          </form>
        </div>
      </Drawer>
    </div>
  );
}

export default ButtonNewDespacho;
