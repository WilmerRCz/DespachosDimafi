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
        
      >
        <FormEditDespacho dataDespacho={dataDespacho} onClose={onClose}/>
      </Drawer>
    </div>
  );
}

export default ButtonEditDespacho;
