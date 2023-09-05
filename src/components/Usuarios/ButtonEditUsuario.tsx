import { FiEdit3 } from "react-icons/fi";
import { Drawer, Space } from "antd";
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
                form={`formEditUsuario`}
                className="bg-green-500 rounded text-slate-700 font-semibold p-0.5 border-2 border-green-600 hover:text-white shadow-md"
              >
                Editar
              </button>
            </Space>
          }
        >
          <FormEditUsuario onClose={onClose} dataUsuario={data[dataUsuario]}/>
        </Drawer>
    </div>
  );
}

export default ButtonEditUsuario;
