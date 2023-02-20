import { Drawer } from "antd";
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
      >
        <div></div>
      </Drawer>
    </div>
  );
}

export default ButtonEditDespacho;
