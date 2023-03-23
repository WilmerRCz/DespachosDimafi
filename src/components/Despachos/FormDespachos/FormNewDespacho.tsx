import SelectSucursales from "../../../components/common/SelectSucursales";
import InputForDrawer from "../../../components/common/InputForDrawer";
import TextAreaForDrawer from "../../../components/common/TextAreaForDrawer";
import SelectDespachador from "../../../components/common/SelectDespachador";
import SelectPatente from "../../../components/common/SelectPatente";
import SelectComuna from "../../../components/common/SelectComuna";
import SelectCelular from "../../../components/common/SelectCelular";
import SelectTipoDocumento from "../../../components/common/SelectTipoDocumento";
import useFormNewDespacho from "../../../hooks/useFormNewDespacho";
import { getDateNow } from "../../../utilities/getDateNow";
interface Props {
  onClose: () => void
}
function FormNewDespacho({onClose}:Props) {
  const { handleSubmit, onSubmit, register } = useFormNewDespacho({onClose});
console.log(getDateNow())
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
      />
      <InputForDrawer
        label="Nombre Cliente"
        register={register}
        name="nombre_cliente"
        type="text"
        required={true}
      />
      <InputForDrawer
        label="Dirección de despacho (Calle)"
        register={register}
        name="direccion_calle_cliente"
        type="text"
        required={true}
      />
      <InputForDrawer
        label="Número de calle"
        register={register}
        setNumber={true}
        name="nro_calle_cliente"
        placeholder="4574"
        type="text"
        required={true}
      />
      <InputForDrawer
        label="Apto/Piso/Block"
        register={register}
        setNumber={true}
        name="apto_cliente"
        placeholder="205"
        type="text"
        optional={true}
      />
      <SelectComuna register={register} />
      <SelectCelular register={register} />
      <SelectTipoDocumento register={register} />
      <InputForDrawer
        label="Orden de Compra"
        register={register}
        name="nro_oc"
        type="text"
        required={true}
      />
      <SelectDespachador register={register} />
      <SelectPatente register={register} />
      <SelectSucursales register={register} />
      <InputForDrawer
        label="Total"
        register={register}
        name="monto_venta"
        placeholder="$"
        type="number"
        required={true}
      />
      <TextAreaForDrawer
        label="Comentario"
        register={register}
        colspan="col-span-1 sm:col-span-2"
        optional="(optional)"
      />
    </form>
  );
}

export default FormNewDespacho;
