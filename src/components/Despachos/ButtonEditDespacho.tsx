import { Drawer, Space } from "antd";
import { FiEdit3 } from "react-icons/fi";
import { findIndexInTable } from "../../utilities/findIndexInTable";
import { Despachos } from "../../interface/Despachos";
import useModal from "../../hooks/useModal";
import FormEditDespacho from "./FormDespachos/FormEditDespacho";

interface Props {
  nro_record: any,
  data: any
  sizeButton: number
  sizeDrawer: number | string
}
function ButtonEditDespacho({nro_record, data, sizeButton, sizeDrawer}:Props) {
  const {open, showDrawer, onClose} = useModal()
  const dataDespacho: Despachos = findIndexInTable(nro_record, data);
  //console.log(dataDespacho)
  return (
    <div>
      <button>
        <FiEdit3
          size={sizeButton}
          color={"#FFC300"}
          onClick={showDrawer}
        />
      </button>
      <Drawer
        title={"Editar Despacho"}
        placement={"right"}
        width={sizeDrawer}
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
        <FormEditDespacho dataDespacho={dataDespacho} onClose={onClose}/>
      </Drawer>
    </div>
  );
}

export default ButtonEditDespacho;
