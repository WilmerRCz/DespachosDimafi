import useModal from '../../hooks/useModal'
import { FiEdit3 } from "react-icons/fi";
import { Drawer, Space } from "antd";
import FormEditVehiculo from './FormEditVehiculo';

interface Props {
  nro_record: any,
  data: any
  sizeButton: number
  sizeDrawer: number | string
}

function ButtonEditVehiculo({nro_record, data, sizeButton, sizeDrawer}:Props) {
  const {open, showDrawer, onClose} = useModal()
  const dataVehiculo = data.findIndex((data: { patente: any; }) => data.patente === nro_record)

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
      title={"Editar Vehiculo"}
      placement={"right"}
      width={sizeDrawer}
      onClose={onClose}
      open={open}
      maskClosable={true}
    >
      <FormEditVehiculo onClose={onClose} dataVehiculo={data[dataVehiculo]}/>
    </Drawer>
    </div>
  )
}

export default ButtonEditVehiculo