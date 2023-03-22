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
import { findIndexInTable } from "../../utilities/findIndexInTable";
import SelectEstadoDespacho from "../SelectEstadoDespacho";
import { Despachos } from "../../interface/Despachos";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDespacho } from "../../api/resDespachos";
import { cleanInputForNull } from "../../utilities/cleanInputforNull";
import { getDateNow } from "../../utilities/getDateNow";
import useModal from "../../hooks/useModal";

function ButtonEditDespacho(record: any) {
  const {open, showDrawer, onClose} = useModal()
  const dataDespacho: Despachos = findIndexInTable(record);

  const queryClient = useQueryClient();
  const updateDespachoMutation = useMutation({
    mutationFn: updateDespacho,
    onSuccess: () => {
      onClose();
      queryClient.invalidateQueries({ queryKey: ["despachos"] });
      alert("Despacho editado!");
    },
  });
  //console.log(dataDespacho)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id_despacho = dataDespacho.id_despacho;
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
      (e.currentTarget.elements[5] as HTMLInputElement)?.value
    );
    const comuna_cliente = parseInt(
      (e.currentTarget.elements[6] as HTMLInputElement).value
    );
    const codigo_celular_cliente = parseInt(
      (e.currentTarget.elements[7] as HTMLInputElement).value
    );
    const celular_cliente = (e.currentTarget.elements[8] as HTMLInputElement)
      ?.value;
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
    const estado_despacho = parseInt(
      (e.currentTarget.elements[16] as HTMLInputElement).value
    );
    const comentario_despacho = (
      e.currentTarget.elements[17] as HTMLInputElement
    )?.value;
    const cleanCelular = cleanInputForNull(celular_cliente);
    const cleanComentario = cleanInputForNull(comentario_despacho);

    if (
      dataDespacho.nombre_estado === "Completado" ||
      dataDespacho.nombre_estado === "Rechazado"
    ) {
      return updateDespachoMutation.mutate({
        id_despacho,
        usuario_despachador,
        sucursal_despacho,
        nombre_cliente,
        rut_cliente_despacho,
        direccion_calle_cliente,
        nro_calle_cliente,
        apto_cliente,
        comuna_cliente,
        codigo_celular_cliente,
        celular_cliente: cleanCelular,
        tipo_documento,
        nro_documento,
        nro_oc,
        vehiculo_despacho,
        monto_venta,
        comentario_despacho: cleanComentario,
      });
    } else if (estado_despacho === 2) {
      updateDespachoMutation.mutate({
        id_despacho,
        usuario_despachador,
        sucursal_despacho,
        nombre_cliente,
        rut_cliente_despacho,
        direccion_calle_cliente,
        nro_calle_cliente,
        apto_cliente,
        comuna_cliente,
        codigo_celular_cliente,
        celular_cliente: cleanCelular,
        tipo_documento,
        nro_documento,
        nro_oc,
        vehiculo_despacho,
        monto_venta,
        estado_despacho,
        comentario_despacho: cleanComentario,
        fechayhora_comienzo_despacho: getDateNow(),
      });
    } else if (estado_despacho === 3 || estado_despacho === 4) {
      updateDespachoMutation.mutate({
        id_despacho,
        usuario_despachador,
        sucursal_despacho,
        nombre_cliente,
        rut_cliente_despacho,
        direccion_calle_cliente,
        nro_calle_cliente,
        apto_cliente,
        comuna_cliente,
        codigo_celular_cliente,
        celular_cliente: cleanCelular,
        tipo_documento,
        nro_documento,
        nro_oc,
        vehiculo_despacho,
        monto_venta,
        estado_despacho,
        comentario_despacho: cleanComentario,
        fechayhora_termino_despacho: getDateNow(),
      });
    } else {
      updateDespachoMutation.mutate({
        id_despacho,
        usuario_despachador,
        sucursal_despacho,
        nombre_cliente,
        rut_cliente_despacho,
        direccion_calle_cliente,
        nro_calle_cliente,
        apto_cliente,
        comuna_cliente,
        codigo_celular_cliente,
        celular_cliente: cleanCelular,
        tipo_documento,
        nro_documento,
        nro_oc,
        vehiculo_despacho,
        monto_venta,
        estado_despacho,
        comentario_despacho: cleanComentario,
      });
    }
  };

  return (
    <div>
      <button>
        <FiEdit3
          size={19}
          color={"#FFC300"}
          onClick={showDrawer}
        />
      </button>
      <Drawer
        title={"Editar Despacho"}
        placement={"right"}
        width={425}
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
          className="grid grid-cols-1 gap-4"
          onSubmit={handleSubmit}
        >
          <InputForDrawer
            label="Rut"
            id="rut"
            name="rut"
            defaultValue={dataDespacho.rut_cliente_despacho}
            placeholder="01.123.456-7"
            type="text"
            required={true}
          />
          <InputForDrawer
            label="Nombre Cliente"
            id="nombre_cliente"
            name="nombre_cliente"
            defaultValue={dataDespacho.nombre_cliente}
            type="text"
            required={true}
          />
          <InputForDrawer
            label="Dirección de despacho (Calle)"
            id="direccion"
            name="direccion"
            defaultValue={dataDespacho.direccion_calle_cliente}
            type="text"
            required={true}
          />
          <InputForDrawer
            label="Número de calle"
            id="nro_calle"
            name="nro_calle"
            defaultValue={dataDespacho.nro_calle_cliente}
            placeholder="4574"
            type="text"
            required={true}
          />
          <InputForDrawer
            label="Apto/Piso/Block"
            id="apto"
            name="apto"
            defaultValue={dataDespacho.apto_cliente}
            placeholder="205"
            type="text"
            optional={true}
          />
          <SelectComuna value={dataDespacho.nombre_comuna} isEdit={true} />
          <SelectCelular
            valueCod={dataDespacho.codigo_celular}
            valueCelular={dataDespacho.celular_cliente}
            isEdit={true}
          />
          <SelectTipoDocumento
            isEdit={true}
            valueTipoDoc={dataDespacho.nombre_documento}
            valueDoc={dataDespacho.nro_documento}
          />
          <InputForDrawer
            label="Orden de Compra"
            id="oc"
            name="oc"
            defaultValue={dataDespacho.nro_oc}
            type="text"
            required={true}
          />
          <SelectDespachador
            value={dataDespacho.usuario_despachador}
            isEdit={true}
          />
          <SelectPatente value={dataDespacho.patente} isEdit={true} />
          <SelectSucursales
            value={dataDespacho.nombre_sucursal}
            isEdit={true}
          />
          <InputForDrawer
            label="Total"
            id="total_venta"
            name="total_venta"
            defaultValue={dataDespacho.monto_venta}
            placeholder="$"
            type="number"
            required={true}
          />
          <SelectEstadoDespacho
            value={dataDespacho.nombre_estado}
            isEdit={true}
            isDisable={
              dataDespacho.nombre_estado === "Completado" ||
              dataDespacho.nombre_estado === "Rechazado"
            }
          />
          <TextAreaForDrawer
            label="Comentario"
            colspan="col-span-1"
            optional="(optional)"
            value={dataDespacho.comentario_despacho}
          />
        </form>
      </Drawer>
    </div>
  );
}

export default ButtonEditDespacho;
