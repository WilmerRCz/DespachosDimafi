import { Drawer, Space } from "antd";

interface Props {
  open: boolean
  showDrawer: () => void
  onClose: () => void
  children: React.ReactNode
  title: string
  idForm?: string
}

function ButtonNew({open, showDrawer, onClose, children, title, idForm}:Props) {
  return (
    <div>
      <button
        onClick={showDrawer}
        className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
      >
        Nuevo
      </button>
      <Drawer
        title={title}
        placement={"bottom"}
        height={500}
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
              form={idForm}
              className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
            >
              Crear
            </button>
          </Space>
        }
      >
        <div>
          {children}
        </div>
      </Drawer>
    </div>
  );
}

export default ButtonNew;
