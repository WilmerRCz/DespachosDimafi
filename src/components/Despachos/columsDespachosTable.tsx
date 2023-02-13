import { FiEye, FiEdit3, FiTrash2 } from "react-icons/fi";

export const columns = [
  {
    title: "Nro",
    dataIndex: "nro",
    key: "nro",
  },
  {
    title: "Rut",
    dataIndex: "rut",
    key: "rut",
  },
  {
    title: "Dirección",
    dataIndex: "direccion",
    key: "direccion",
  },
  {
    title: "Despachador",
    dataIndex: "despachador",
    key: "despachador",
  },
  {
    title: "Estado",
    dataIndex: "estado",
    key: "estado",
  },
  {
    title: "Acciones",
    dataIndex: "acciones",
    key: "acciones",
    render: () => (
      <div className="flex gap-4">
        <button>
          <FiEye size={19} />
        </button>
        <button>
          <FiEdit3
            size={19}
            color={"#FFC300"}
            onClick={() => {
              alert("hi");
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
