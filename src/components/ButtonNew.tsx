import { useState } from "react";
import { Button, Drawer, Select, Space } from "antd";
import { Input } from "antd";
import { Option } from "antd/es/mentions";

function ButtonNew() {
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
            <Input placeholder="Rut" />
            <Input placeholder="Nombre Cliente" />
            <Input placeholder="Calle" />
            <Input placeholder="Número de calle" />
            <Input placeholder="Apto" />
            <Input placeholder="Comuna" />
            <Input placeholder="Codigo de celular" />
            <Input placeholder="Celular" />
            <Input.Group compact>
              <Select defaultValue="1">
                <Option value="1">Factura</Option>
                <Option value="2">Boleta</Option>
              </Select>
              <Input style={{ width: '60%' }} placeholder="Nro de documento" />
            </Input.Group>
            <Input placeholder="OC" />
            <Input placeholder="Despachador" />
            <Input placeholder="Patente de vehiculo" />
            <Input placeholder="Total" />
            <Input placeholder="Comentario" />
          </form>
        </div>
      </Drawer>
    </div>
  );
}

export default ButtonNew;
