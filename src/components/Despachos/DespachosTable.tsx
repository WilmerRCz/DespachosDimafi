import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import { getDespachos } from "../../api/resDespachos";
import { Despachocard, Despachos } from "../../interface/Despachos";
import { AlignType } from "rc-table/lib/interface";
import ButtonViewDespachoInTable from "./ButtonViewDespachoInTable";
import ButtonEditDespacho from "./ButtonEditDespacho";
import ButtonDeleteDespacho from "./ButtonDeleteDespacho";
import SpinnerLoading from "../common/SpinnerLoading";
import EstadoStyled from "../common/EstadoStyled";
import DespachoCard from "./DespachoCard";
import ErrorReactQuery from '../common/ErrorReactQuery'


function DespachosTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["despachos"],
    queryFn: getDespachos,
    select: (despachos) =>
      despachos.sort((a: any, b: any) => b.id_despacho - a.id_despacho),
  });

  if (isLoading) return <SpinnerLoading size={28} />;
  else if (isError) return <ErrorReactQuery/>
  const columns = [
    {
      title: "Nro",
      dataIndex: "nro",
      key: "nro",
      align: "center" as AlignType,
      className: "font-bold",
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
      render: (estado: string) => {
        return <EstadoStyled estado={estado} />;
      },
    },
    {
      title: "Acciones",
      dataIndex: "acciones",
      key: "acciones",
      align: "center" as AlignType,
      render: (text: any, record: any, index: any) => {
        return (
          <div className="flex gap-4 justify-center">
            <ButtonViewDespachoInTable
              nro_record={record.nro}
              data={data}
              sizeButton={19}
              sizeDrawer={500}
            />
            <ButtonEditDespacho
              nro_record={record.nro}
              data={data}
              sizeButton={19}
              sizeDrawer={500}
            />
            <ButtonDeleteDespacho
              nro_record={record.nro}
              data={data}
              sizeButton={19}
            />
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
    <div>
      <div className="mt-2 hidden sm:block">
        <Table columns={columns} dataSource={fileData} />
      </div>
      {data.map((despacho: Despachocard) => (
        <div key={despacho.id_despacho} className="sm:hidden">
          <DespachoCard
            nro_despacho={despacho.id_despacho}
            estado_despacho={despacho.nombre_estado}
            direccion={`${despacho.direccion_calle_cliente}, ${despacho.nro_calle_cliente} - ${despacho.nombre_comuna}`}
            fecha_creación={despacho.fecha_creacion_despacho}
            despachador={despacho.usuario_despachador}
            rut_cliente={despacho.rut_cliente_despacho}
            total={despacho.monto_venta}
            data={data}
            nro_record={despacho.id_despacho}
          />
        </div>
      ))}
    </div>
  );
}

export default DespachosTable;
