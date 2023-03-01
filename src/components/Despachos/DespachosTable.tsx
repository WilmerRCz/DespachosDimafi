import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import { getDespachos } from "../../api/resDespachos";
import { Despachos } from "../../interface/Despachos";
import { FiEye, FiEdit3, FiTrash2 } from "react-icons/fi";
import { AlignType } from "rc-table/lib/interface";
import ButtonViewDespachoInTable from "./ButtonViewDespachoInTable";
import ButtonEditDespacho from "./ButtonEditDespacho";

function DespachosTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["despachos"],
    queryFn: getDespachos,
    select: despachos => despachos.sort((a: any, b: any) => b.id_despacho - a.id_despacho)
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  const columns = [
    {
      title: "Nro",
      dataIndex: "nro",
      key: "nro",
      align: "center" as AlignType,
      className: 'font-bold'
    },
    {
      title: "Rut",
      dataIndex: "rut",
      key: "rut",
      align: "center" as AlignType,
    },
    {
      title: "Dirección",
      dataIndex: "direccion",
      key: "direccion",
      align: "center" as AlignType,
    },
    {
      title: "Despachador",
      dataIndex: "despachador",
      key: "despachador",
      align: "center" as AlignType,
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
      align: "center" as AlignType,
    },
    {
      title: "Acciones",
      dataIndex: "acciones",
      key: "acciones",
      align: "center" as AlignType,
      render: (text: any, record: any, index: any) => {
        return (
          <div className="flex gap-4 justify-center">
            <ButtonViewDespachoInTable record={record} data={data} />
            <ButtonEditDespacho record={record} data={data}/>
            <button>
              <FiTrash2 size={19} color={"red"} />
            </button>
          </div>
        );
      },
    },
  ];

  const fileData = data.map((despacho: Despachos) => ({
      key: despacho.id_despacho,
      nro: despacho.id_despacho,
      rut: despacho.rut_cliente_despacho,
      direccion: `${despacho.direccion_calle_cliente}, ${despacho.nro_calle_cliente} - ${despacho.nombre_comuna}`,
      despachador: despacho.usuario_despachador,
      estado: despacho.nombre_estado,
    }));

  return (
    <div className="mt-2">
      <Table columns={columns} dataSource={fileData} />
    </div>
  );
}

export default DespachosTable;
