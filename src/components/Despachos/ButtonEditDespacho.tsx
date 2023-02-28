import { Drawer, Space } from "antd";
import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";

function ButtonEditDespacho() {
  const [open, setOpen] = useState(false);

  const inOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {}

  return (
    <div>
      <button>
        <FiEdit3
          size={19}
          color={"#FFC300"}
          onClick={() => {
            inOpen();
          }}
        />
      </button>
      <Drawer
        title={"Editar Despacho"}
        placement={"right"}
        width={425}
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
              form="formEditDespacho"
              className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
            >
            Editar
            </button>
          </Space>
        }
      >
          <form
            id="formEditDespacho"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            onSubmit={handleSubmit}
          ></form>
      </Drawer>
    </div>
  );
}

export default ButtonEditDespacho;
