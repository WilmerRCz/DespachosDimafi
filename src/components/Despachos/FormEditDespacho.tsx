import useFormEditDespacho from "../../hooks/useFormEditDespacho";
import { Despachos } from "../../interface/Despachos";
import InputForDrawer from "../InputForDrawer";
import SelectCelular from "../SelectCelular";
import SelectComuna from "../SelectComuna";
import SelectDespachador from "../SelectDespachador";
import SelectEstadoDespacho from "../SelectEstadoDespacho";
import SelectPatente from "../SelectPatente";
import SelectSucursales from "../SelectSucursales";
import SelectTipoDocumento from "../SelectTipoDocumento";
import TextAreaForDrawer from "../TextAreaForDrawer";

interface Props {
  dataDespacho: Despachos;
  onClose: () => void;
}

function FormEditDespacho({ dataDespacho, onClose }: Props) {
  const { handleSubmit, onSubmit, register } = useFormEditDespacho({ onClose });
  return (
    <form
      id="formEditDespacho"
      className="grid grid-cols-1 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputForDrawer
        label="Rut"
        register={register}
        name="rut_cliente_despacho"
        defaultValue={dataDespacho.rut_cliente_despacho}
        placeholder="01.123.456-7"
        type="text"
        required={true}
      />
      <InputForDrawer
        label="Nombre Cliente"
        register={register}
        name="nombre_cliente"
        defaultValue={dataDespacho.nombre_cliente}
        type="text"
        required={true}
      />
      <InputForDrawer
        label="Dirección de despacho (Calle)"
        register={register}
        name="direccion_calle_cliente"
        defaultValue={dataDespacho.direccion_calle_cliente}
        type="text"
        required={true}
      />
      <InputForDrawer
        label="Número de calle"
        register={register}
        setNumber={true}
        name="nro_calle_cliente"
        defaultValue={dataDespacho.nro_calle_cliente}
        placeholder="4574"
        type="text"
        required={true}
      />
      <InputForDrawer
        label="Apto/Piso/Block"
        register={register}
        setNumber={true}
        name="apto_cliente"
        defaultValue={dataDespacho.apto_cliente}
        placeholder="205"
        type="text"
        optional={true}
      />
      <SelectComuna
        register={register}
        value={dataDespacho.nombre_comuna}
        isEdit={true}
      />
      <SelectCelular
        register={register}
        valueCod={dataDespacho.codigo_celular}
        valueCelular={dataDespacho.celular_cliente}
        isEdit={true}
      />
      <SelectTipoDocumento
        register={register}
        isEdit={true}
        valueTipoDoc={dataDespacho.nombre_documento}
        valueDoc={dataDespacho.nro_documento}
      />
      <InputForDrawer
        label="Orden de Compra"
        register={register}
        name="nro_oc"
        defaultValue={dataDespacho.nro_oc}
        type="text"
        required={true}
      />
      <SelectDespachador
        register={register}
        value={dataDespacho.usuario_despachador}
        isEdit={true}
      />
      <SelectPatente
        register={register}
        value={dataDespacho.patente}
        isEdit={true}
      />
      <SelectSucursales
        register={register}
        value={dataDespacho.nombre_sucursal}
        isEdit={true}
      />
      <InputForDrawer
        label="Total"
        register={register}
        name="monto_venta"
        defaultValue={dataDespacho.monto_venta}
        placeholder="$"
        type="number"
        required={true}
      />
      <SelectEstadoDespacho
        value={dataDespacho.nombre_estado}
        register={register}
        isEdit={true}
        isDisable={
          dataDespacho.nombre_estado === "Completado" ||
          dataDespacho.nombre_estado === "Rechazado"
        }
      />
      <TextAreaForDrawer
        label="Comentario"
        register={register}
        colspan="col-span-1"
        optional="(optional)"
        value={dataDespacho.comentario_despacho}
      />
    </form>
  );
}

export default FormEditDespacho;
