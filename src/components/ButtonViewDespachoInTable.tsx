import { useState } from "react";
import { Drawer } from "antd";
import { FiEye } from "react-icons/fi";
import { Despachos } from "../interface/Despachos";

function ButtonViewDespachoInTable(record: any, data: []) {
  const [open, setOpen] = useState(false);

  const inOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const nroDespacho: number = record.record.nro;
  const dataDespacho: Despachos = record.data[nroDespacho - 1];

  return (
    <div>
      <button>
        <FiEye
          size={19}
          onClick={() => {
            inOpen();
          }}
        />
      </button>
      <Drawer
        title={"Despacho"}
        placement={"right"}
        width={425}
        onClose={onClose}
        open={open}
      >
        <div className="border-2 border-slate-100 rounded shadow-xl">
          <div className="p-2 grid grid-cols-4 gap-4">
            <div className="col-span-2">
              <p className="text-slate-500">Nro</p>
              <p className="text-slate-800">{dataDespacho.id_despacho}</p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-500">Rut Cliente</p>
              <p className="text-slate-800">
                {dataDespacho.rut_cliente_despacho}
              </p>
            </div>
            <div className="col-span-4">
              <p className="text-slate-500">Nombre Cliente</p>
              <p className="text-slate-800">{dataDespacho.nombre_cliente}</p>
            </div>
            <div className="col-span-4">
              <p className="text-slate-500">Dirección de Despacho</p>
              <p className="text-slate-800">{`${dataDespacho.direccion_calle_cliente}, ${dataDespacho.nro_calle_cliente} - ${dataDespacho.nombre_comuna}`}</p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-500">Celular</p>
              <p className="text-slate-800">{`${dataDespacho.codigo_celular} ${dataDespacho.celular_cliente}`}</p>
            </div>
            <div className="">
              <p className="text-slate-500">Tipo de Documento</p>
              <p className="text-slate-800">{`${dataDespacho.nombre_documento} - ${dataDespacho.nro_documento}`}</p>
            </div>
            <div className="">
              <p className="text-slate-500">OC</p>
              <p className="text-slate-800">{dataDespacho.nro_oc}</p>
            </div>
            <div className="">
              <p className="text-slate-500">Despachador</p>
              <p className="text-slate-800">
                {dataDespacho.usuario_despachador}
              </p>
            </div>
            <div className="">
              <p className="text-slate-500">Patente</p>
              <p className="text-slate-800">{dataDespacho.patente}</p>
            </div>
            <div className="">
              <p className="text-slate-500">Sucursal de despacho</p>
              <p className="text-slate-800">{dataDespacho.nombre_sucursal}</p>
            </div>
            <div className="">
              <p className="text-slate-500">Estado del despacho</p>
              <p className="text-slate-800">{dataDespacho.nombre_estado}</p>
            </div>
            <div className="">
              <p className="text-slate-500">Total</p>
              <p className="text-slate-800">{`$${dataDespacho.monto_venta}`}</p>
            </div>
            <div className="col-span-4 ">
              <p className="text-slate-500">Comentario</p>
              <p className="text-slate-800">
                {dataDespacho.comentario_despacho}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-500">Creación</p>
              <p className="text-slate-800">
                {dataDespacho.fecha_creacion_despacho}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-500">Ultima modificación</p>
              <p className="text-slate-800">
                {dataDespacho.fecha_modificacion_despacho}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-500">Fecha de inicio del despacho</p>
              <p className="text-slate-800">
                {dataDespacho.fechayhora_comienzo_despacho}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-500">Fecha de cierre del despacho</p>
              <p className="text-slate-800">
                {dataDespacho.fechayhora_termino_despacho}
              </p>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default ButtonViewDespachoInTable;
