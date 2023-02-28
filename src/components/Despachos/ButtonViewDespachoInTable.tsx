import { useState } from "react";
import { Drawer } from "antd";
import { FiEye } from "react-icons/fi";
import { Despachos } from "../../interface/Despachos";
import { convertDate } from '../../utilities/convertDate';
import { ifNullElseString } from "../../utilities/ifNullElseString";

function ButtonViewDespachoInTable(record: any) {
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
        title={"Ver Despacho"}
        placement={"right"}
        width={425}
        onClose={onClose}
        open={open}
      >
        <div className="grid grid-cols-4  gap-4 p-2 border-2  rounded shadow-md capitalize"> 
            <div className="col-span-2">
              <p className="text-slate-500">Nro</p>
              <p className="text-slate-800 font-semibold">{dataDespacho.id_despacho}</p>
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
              <p className="text-slate-800">{`${dataDespacho.direccion_calle_cliente}, ${dataDespacho.nro_calle_cliente}, apto ${dataDespacho.apto_cliente} - ${dataDespacho.nombre_comuna}`}</p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-500">Celular</p>
              <p className="text-slate-800">{`${dataDespacho.codigo_celular} ${dataDespacho.celular_cliente}`}</p>
            </div>
            <div className="col-span-1">
              <p className="text-slate-500">Documento</p>
              <p className="text-slate-800">{`${dataDespacho.nombre_documento} - ${dataDespacho.nro_documento}`}</p>
            </div>
            <div className="col-span-1">
              <p className="text-slate-500">OC</p>
              <p className="text-slate-800">{dataDespacho.nro_oc}</p>
            </div>
            <div className="col-span-2">
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
              <p className="text-slate-500">Estado</p>
              <p className="text-slate-800">{dataDespacho.nombre_estado}</p>
            </div>
            <div className="">
              <p className="text-slate-500">Sucursal</p>
              <p className="text-slate-800">{dataDespacho.nombre_sucursal}</p>
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
              <p className="text-slate-800">{convertDate(dataDespacho.fecha_creacion_despacho)}
                {}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-500">Ultima modificación</p>
              <p className="text-slate-800">
                {convertDate(dataDespacho.fecha_modificacion_despacho)}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-500">Inicio del despacho</p>
              <p className="text-slate-800">
                {convertDate(dataDespacho.fechayhora_comienzo_despacho)}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-slate-500">Cierre del despacho</p>
              <p className="text-slate-800">
                {convertDate(dataDespacho.fechayhora_termino_despacho) }
              </p>
            </div>
        </div>
      </Drawer>
    </div>
  );
}

export default ButtonViewDespachoInTable;
