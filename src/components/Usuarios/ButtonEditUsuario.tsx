import { FiEdit3 } from "react-icons/fi";
import { Drawer } from "antd";
import useModal from "../../hooks/useModal";
import FormEditUsuario from "./FormEditUsuario";

interface Props {
  nro_record: any;
  data: any;
  sizeButton: number;
  sizeDrawer: number | string;
}

function ButtonEditUsuario({
  nro_record,
  data,
  sizeButton,
  sizeDrawer,
}: Props) {
  const dataUsuario = data.findIndex((data: { id_usuario: any; }) => data.id_usuario === nro_record)
  const { open, showDrawer, onClose } = useModal();

  return (
    <div>
      <button>
        <FiEdit3 size={sizeButton} color={"#FFC300"} onClick={showDrawer} />
      </button>
        <Drawer
          title={"Editar Usuario"}
          placement={"right"}
          width={sizeDrawer}
          onClose={onClose}
          open={open}
          maskClosable={true}
        >
          <FormEditUsuario onClose={onClose} dataUsuario={data[dataUsuario]}/>
        </Drawer>
    </div>
  );
}

export default ButtonEditUsuario;
