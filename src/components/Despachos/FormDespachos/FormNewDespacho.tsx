import SelectSucursales from "../../../components/common/SelectSucursales";
import InputForDrawer from "../../../components/common/InputForDrawer";
import TextAreaForDrawer from "../../../components/common/TextAreaForDrawer";
import SelectDespachador from "../../../components/common/SelectDespachador";
import SelectPatente from "../../../components/common/SelectPatente";
import SelectComuna from "../../../components/common/SelectComuna";
import SelectCelular from "../../../components/common/SelectCelular";
import SelectTipoDocumento from "../../../components/common/SelectTipoDocumento";
import useFormNewDespacho from "../../../hooks/useFormNewDespacho";

interface Props {
  onClose: () => void
}
function FormNewDespacho({onClose}:Props) {
  const { handleSubmit, onSubmit, register, errors } = useFormNewDespacho({onClose});

  return (
    <form
      id="formNewDespacho"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputForDrawer
        label="Rut"
        register={register}
        name="rut_cliente_despacho"
        placeholder="01.123.456-7"
        type="text"
        required={true}
        errorMessage={errors.rut_cliente_despacho?.message}
      />
      <InputForDrawer
        label="Nombre Cliente"
        register={register}
        name="nombre_cliente"
        type="text"
        required={true}
        errorMessage={errors.nombre_cliente?.message}
      />
      <InputForDrawer
        label="Dirección de despacho (Calle)"
        register={register}
        name="direccion_calle_cliente"
        type="text"
        required={true}
        errorMessage={errors.direccion_calle_cliente?.message}
      />
      <InputForDrawer
        label="Número de calle"
        register={register}
        name="nro_calle_cliente"
        placeholder="4574"
        type="text"
        required={true}
        errorMessage={errors.nro_calle_cliente?.message}
      />
      <InputForDrawer
        label="Apto/Piso/Block"
        register={register}
        name="apto_cliente"
        placeholder="205"
        type="text"
        optional={true}
        errorMessage={errors.apto_cliente?.message}
      />
      <SelectComuna register={register} name={"comuna_cliente"}/>
      <SelectCelular register={register} name={"codigo_celular_cliente"} celular_cliente={"celular_cliente"} errorMessage={errors.celular_cliente?.message}/>
      <SelectTipoDocumento register={register} name={"tipo_documento"} nro_documento={"nro_documento"} errorMessage={errors.nro_documento?.message}/>
      <InputForDrawer
        label="Orden de Compra"
        register={register}
        name="nro_oc"
        type="text"
        required={true}
        errorMessage={errors.nro_oc?.message}
      />
      <SelectDespachador register={register} name={"usuario_despachador"}/>
      <SelectPatente register={register} name={"vehiculo_despacho"}/>
      <SelectSucursales register={register} name={"sucursal_despacho"}/>
      <InputForDrawer
        label="Total"
        register={register}
        name="monto_venta"
        placeholder="$"
        type="text"
        required={true}
        errorMessage={errors.monto_venta?.message}
      />
      <TextAreaForDrawer
        label="Comentario"
        register={register}
        name="comentario_despacho"
        colspan="col-span-1 sm:col-span-2"
        optional="(optional)"
        errorMessage={errors.comentario_despacho?.message}
      />
    </form>
  );
}

export default FormNewDespacho;
