import React from 'react'
import { Space, Drawer } from 'antd';
import useModal from '../../hooks/useModal';
import { FiEdit3 } from 'react-icons/fi';
import FormEditSucursal from './FormEditSucursal';

interface Props {
  nro_record: any,
  data: any
  sizeButton: number
  sizeDrawer: number | string
}

function ButtonEditSucursal({nro_record, data, sizeButton, sizeDrawer}:Props) {
  const {open, showDrawer, onClose} = useModal()
  const dataSucursal = data.findIndex((data: { id_sucursal: any; }) => data.id_sucursal === nro_record)
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
      title={"Editar Sucursal"}
      placement={"right"}
      width={sizeDrawer}
      onClose={onClose}
      open={open}
      maskClosable={true}
    >
      <FormEditSucursal dataSucursal={data[dataSucursal]} onClose={onClose}/>
    </Drawer>
    </div>
  )
}

export default ButtonEditSucursal