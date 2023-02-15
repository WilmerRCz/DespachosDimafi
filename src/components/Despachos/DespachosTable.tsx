import { useQuery } from "@tanstack/react-query";
import { Drawer, Table } from "antd";
import { getDespachos } from "../../api/resDespachos";
import { Despachos } from "../../interface/Despachos";
import { FiEye, FiEdit3, FiTrash2 } from "react-icons/fi";
import { AlignType } from "rc-table/lib/interface";
import { useState } from "react";
import ButtonEditInTable from "../ButtonEditInTable";

function DespachosTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["despachos"],
    queryFn: getDespachos,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  const columns = [
    {
      title: "Nro",
      dataIndex: "nro",
      key: "nro",
      align: "center" as AlignType,
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
            <ButtonEditInTable record={record}/>
            <button>
              <FiEdit3 size={19} color={"#FFC300"} />
            </button>

            <button>
              <FiTrash2 size={19} color={"red"} />
            </button>
          </div>
        );
      },
    },
  ];

  const fileData = data
    .slice(0)
    .reverse()
    .map((despacho: Despachos) => ({
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
