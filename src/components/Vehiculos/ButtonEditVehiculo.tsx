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
            form="formEditVehiculo"
            className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
          >
            Editar
          </button>
        </Space>
      }
    >
      <FormEditVehiculo onClose={onClose} dataVehiculo={data[dataVehiculo]}/>
    </Drawer>
    </div>
  )
}

export default ButtonEditVehiculo