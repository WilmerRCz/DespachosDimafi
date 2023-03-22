import { Drawer, Space } from "antd";
import FormNewDespacho from "./FormNewDespacho";
interface Props {
  open: boolean
  showDrawer: () => void
  onClose: () => void
}

function ButtonNewDespacho({open, showDrawer, onClose}:Props) {
  return (
    <div>
      <button
        onClick={showDrawer}
        className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
      >
        Nuevo
      </button>
      <Drawer
        title="Crea un nuevo despacho"
        placement={"bottom"}
        height={500}
        onClose={onClose}
        open={open}
        maskClosable={false}
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
              form="formNewDespacho"
              className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
            >
              Crear
            </button>
          </Space>
        }
      >
        <div>
          <FormNewDespacho onClose={onClose}/>
        </div>
      </Drawer>
    </div>
  );
}

export default ButtonNewDespacho;
