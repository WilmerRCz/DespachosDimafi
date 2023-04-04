import React from 'react'
import useModal from '../../hooks/useModal'
import { Drawer } from "antd";
import { FiEye } from "react-icons/fi";

interface Props {
  nro_record: any,
  data: any
  sizeButton: number
  sizeDrawer: number | string
}

function ButtonViewVehiculo({nro_record, data, sizeButton, sizeDrawer}:Props) {
  const {open, showDrawer, onClose} = useModal()
  return (
    <div><button>
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

  </Drawer>

  </div>
  )
}

export default ButtonViewVehiculo