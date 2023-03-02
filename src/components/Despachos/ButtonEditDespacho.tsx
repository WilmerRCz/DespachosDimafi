import { Drawer, Space } from "antd";
import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import InputForDrawer from "../InputForDrawer";
import SelectCelular from "../SelectCelular";
import SelectComuna from "../SelectComuna";
import SelectDespachador from "../SelectDespachador";
import SelectPatente from "../SelectPatente";
import SelectSucursales from "../SelectSucursales";
import SelectTipoDocumento from "../SelectTipoDocumento";
import TextAreaForDrawer from "../TextAreaForDrawer";
import { findIndexInTable } from '../../utilities/findIndexInTable';
import SelectEstadoDespacho from '../SelectEstadoDespacho';
import { Despachos } from '../../interface/Despachos';

function ButtonEditDespacho(record:any) {
  const [open, setOpen] = useState(false);

  const inOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const dataDespacho: Despachos = findIndexInTable(record)


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div>
      <button>
        <FiEdit3
          size={19}
          color={"#FFC300"}
          onClick={() => {
            inOpen();
          }}
        />
      </button>
      <Drawer
        title={"Editar Despacho"}
        placement={"right"}
        width={425}
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
              type="submit"
              form="formEditDespacho"
              className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
            >
              Editar
            </button>
          </Space>
        }
      >
        <form
          id="formEditDespacho"
          className="grid grid-col-1 gap-4"
          onSubmit={handleSubmit}
        >
          <InputForDrawer
            label="Rut"
            id="rut"
            name="rut"
            value={dataDespacho.rut_cliente_despacho}
            placeholder="01.123.456-7"
            type="text"
            required={true}
          />
          <InputForDrawer
            label="Nombre Cliente"
            id="nombre_cliente"
            name="nombre_cliente"
            value={dataDespacho.nombre_cliente}
            type="text"
            required={true}
          />
          <InputForDrawer
            label="Dirección de despacho (Calle)"
            id="direccion"
            name="direccion"
            value={dataDespacho.direccion_calle_cliente}
            type="text"
            required={true}
          />
          <InputForDrawer
            label="Número de calle"
            id="nro_calle"
            name="nro_calle"
            value={dataDespacho.nro_calle_cliente}
            placeholder="4574"
            type="text"
            required={true}
          />
          <InputForDrawer
            label="Apto/Piso/Block"
            id="apto"
            name="apto"
            value={dataDespacho.apto_cliente}
            placeholder="205"
            type="text"
            optional={true}
          />
          <SelectComuna isValue={true} value={dataDespacho.comuna_cliente}/>
          <SelectCelular />
          <SelectTipoDocumento />
          <InputForDrawer
            label="Orden de Compra"
            id="oc"
            name="oc"
            value={dataDespacho.nro_oc}
            type="text"
            required={true}
          />
          <SelectDespachador />
          <SelectPatente />
          <SelectSucursales />
          <InputForDrawer
            label="Total"
            id="total_venta"
            name="total_venta"
            value={dataDespacho.monto_venta}
            placeholder="$"
            type="number"
            required={true}
          />
          <SelectEstadoDespacho/>
          <TextAreaForDrawer label="Comentario" colspan="col-span-1" optional="(optional)" />
        </form>
      </Drawer>
    </div>
  );
}

export default ButtonEditDespacho;
