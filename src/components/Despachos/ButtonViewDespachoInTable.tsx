import { Drawer } from "antd";
import { FiEye } from "react-icons/fi";
import { findIndexInTable } from '../../utilities/findIndexInTable';
import useModal from "../../hooks/useModal";
import ViewDespacho from "./ViewDespacho";

interface Props {
  nro_record: any,
  data: any
  sizeButton: number
  sizeDrawer: number | string
}

function ButtonViewDespachoInTable({nro_record, data, sizeButton, sizeDrawer}:Props) {
  const {open, showDrawer, onClose} = useModal()
  const dataDespacho = findIndexInTable(nro_record, data)
  
  return (
    <div>
      <button>
        <FiEye
          size={sizeButton}
          onClick={showDrawer}
        />
      </button>
      <Drawer
        title={"Ver Despacho"}
        placement={"right"}
        width={sizeDrawer}
        onClose={onClose}
        open={open}
      >
         <ViewDespacho dataDespacho={dataDespacho}/>
      </Drawer>
    </div> 
  );
}

export default ButtonViewDespachoInTable;
