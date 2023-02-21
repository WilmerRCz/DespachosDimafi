import { useState } from "react";
import { Drawer, Space } from "antd";
import SelectSucursales from "../SelectSucursales";
import InputForDrawer from "../InputForDrawer";
import TextAreaForDrawer from "../TextAreaForDrawer";
import SelectDespachador from "../SelectDespachador";
import SelectPatente from "../SelectPatente";
import SelectComuna from "../SelectComuna";
import SelectCelular from "../SelectCelular";
import SelectTipoDocumento from "../SelectTipoDocumento";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDespacho } from "../../api/resDespachos";
import { resetForm } from "../../utilities/resetForm";

function ButtonNewDespacho() {
  const queryClient = useQueryClient();

  const createNewDespacho = useMutation({
    mutationFn: createDespacho,
    onSuccess: () => {
      console.log("Despacho creado!");
      queryClient.invalidateQueries({ queryKey: ["despachos"] });
      resetForm('formNewDespacho')
      onClose();
    },
  });

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rut_cliente_despacho = (
      e.currentTarget.elements[1] as HTMLInputElement
    ).value;
    const nombre_cliente = (e.currentTarget.elements[2] as HTMLInputElement)
      .value;
    const direccion_calle_cliente = (
      e.currentTarget.elements[3] as HTMLInputElement
    ).value;
    const nro_calle_cliente = parseInt(
      (e.currentTarget.elements[4] as HTMLInputElement).value
    );
    const apto_cliente = parseInt(
      (e.currentTarget.elements[5] as HTMLInputElement).value
    );
    const comuna_cliente = parseInt(
      (e.currentTarget.elements[6] as HTMLInputElement).value
    );
    const codigo_celular_cliente = parseInt(
      (e.currentTarget.elements[7] as HTMLInputElement).value
    );
    const celular_cliente = (e.currentTarget.elements[8] as HTMLInputElement)
      .value;
    const tipo_documento = parseInt(
      (e.currentTarget.elements[9] as HTMLInputElement).value
    );
    const nro_documento = (e.currentTarget.elements[10] as HTMLInputElement)
      .value;
    const nro_oc = (e.currentTarget.elements[11] as HTMLInputElement).value;
    const usuario_despachador = parseInt(
      (e.currentTarget.elements[12] as HTMLInputElement).value
    );
    const vehiculo_despacho = (e.currentTarget.elements[13] as HTMLInputElement)
      .value;
    const sucursal_despacho = parseInt(
      (e.currentTarget.elements[14] as HTMLInputElement).value
    );
    const monto_venta = (e.currentTarget.elements[15] as HTMLInputElement)
      .value;
    const comentario_despacho = (
      e.currentTarget.elements[16] as HTMLInputElement
    ).value;
    console.log(comentario_despacho);
    createNewDespacho.mutate({
      usuario_despachador,
      sucursal_despacho,
      nombre_cliente,
      rut_cliente_despacho,
      direccion_calle_cliente,
      nro_calle_cliente,
      apto_cliente,
      comuna_cliente,
      codigo_celular_cliente,
      celular_cliente,
      tipo_documento,
      nro_documento,
      nro_oc,
      vehiculo_despacho,
      monto_venta,
      comentario_despacho,
    });
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
              type="submit"
              form="formNewDespacho"
              className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
            >
              Crear
            </button>
          </Space>
        }
      >
        <div>
          <form
            id="formNewDespacho"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            onSubmit={handleSubmit}
          >
            <InputForDrawer
              label="Rut"
              placeholder="01.123.456-7"
              type="text"
            />
            <InputForDrawer label="Nombre Cliente" placeholder="" type="text" />
            <InputForDrawer label="Calle" placeholder="" type="text" />
            <InputForDrawer
              label="Número de calle"
              placeholder="4574"
              type="text"
            />
            <InputForDrawer
              label="Apto/Piso/Block"
              placeholder="205"
              type="text"
            />
            <SelectComuna />
            <SelectCelular />
            <SelectTipoDocumento />
            <InputForDrawer
              label="Orden de Compra"
              placeholder=""
              type="text"
            />
            <SelectDespachador />
            <SelectPatente />
            <SelectSucursales />
            <InputForDrawer label="Total" placeholder="$" type="number" />
            <TextAreaForDrawer label="Comentario" placeholder="" />
          </form>
        </div>
      </Drawer>
    </div>
  );
}

export default ButtonNewDespacho;
