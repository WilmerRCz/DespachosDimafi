import { FiEye, FiEdit3, FiTrash2 } from "react-icons/fi";
import { AlignType } from 'rc-table/lib/interface';

export const columns = [
  {
    title: "Nro",
    dataIndex: "nro",
    key: "nro",
    align: 'center' as AlignType
  },
  {
    title: "Rut",
    dataIndex: "rut",
    key: "rut",
    align: 'center' as AlignType
  },
  {
    title: "Dirección",
    dataIndex: "direccion",
    key: "direccion",
    align: 'center' as AlignType
  },
  {
    title: "Despachador",
    dataIndex: "despachador",
    key: "despachador",
    align: 'center' as AlignType
  },
  {
    title: "Estado",
    dataIndex: "estado",
    key: "estado",
    align: 'center' as AlignType
  },
  {
    title: "Acciones",
    dataIndex: "acciones",
    key: "acciones",
    align: 'center' as AlignType,
    render: (record: any) => (
      <div className="flex gap-4 justify-center">
        <button>
          <FiEye size={19} />
        </button>
        <button>
          <FiEdit3
            size={19}
            color={"#FFC300"}
            onClick={() => {
              alert(`hi ${record}`);
            }}
          />
        </button>

        <button>
          <FiTrash2 size={19} color={"red"} />
        </button>
      </div>
    ),
  },
];
