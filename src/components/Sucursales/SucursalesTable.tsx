import { getSucursales } from "../../api/resSucursales";
import { useQuery } from "@tanstack/react-query";
import { Sucursales, Sucursalescard } from '../../interface/Sucursales';
import SpinnerLoading from "../common/SpinnerLoading";
import { AlignType } from 'rc-table/lib/interface';
import InactiveStyle from "../common/InactiveStyle";
import { convertDate } from "../../utilities/convertDate";
import { Table } from "antd";
import ButtonEditSucursal from "./ButtonEditSucursal";
import ErrorReactQuery from '../common/ErrorReactQuery'
import useScreenSize from '../../hooks/useScreenSize'
import SucursalesCard from './SucursalesCard'

function SucursalesTable() {

  const { width } = useScreenSize()


  const { data, isLoading, isError } = useQuery({
    queryKey: ["sucursales"],
    queryFn: getSucursales,
  });

  if (isLoading) return <SpinnerLoading size={28}/>;
  else if (isError) return <ErrorReactQuery/>

  const columns = [
    {
      title: "ID",
      dataIndex: "id_sucursal",
      key: "id_sucursal",
      align: "center" as AlignType,
      className: "font-bold",
    },
    {
      title: "Sucursal",
      dataIndex: "sucursal",
      key: "sucursal",
      align: "center" as AlignType,
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
      align: "center" as AlignType,
      render: (estado: string) => {
        return <InactiveStyle estado={estado} />;
      },
    },
    {
      title: "Creación",
      dataIndex: "creacion",
      key: "creacion",
      align: "center" as AlignType,
    },
    {
      title: "Modificación",
      dataIndex: "modificacion",
      key: "modificacion",
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
              <ButtonEditSucursal
              nro_record={record.id_sucursal}
              data={data}
              sizeButton={19}
              sizeDrawer={500}
            />
          </div>
        );
      },
    },
  ];

  const fileData = data.map((sucursal: Sucursales) => ({
    key: sucursal.id_sucursal,
    id_sucursal: sucursal.id_sucursal,
    sucursal: sucursal.nombre_sucursal,
    estado: sucursal.nombre_estado,
    creacion: convertDate(sucursal.fecha_creacion_sucursal),
    modificacion: convertDate(sucursal.fecha_modificacion_sucursal),
  }));

  return (
    <div>
    {(width > 640)
      ?
    <div className="mt-2 hidden sm:block">
      <Table columns={columns} dataSource={fileData} />
    </div>
    :
    <div>
    {data.map((sucursal: Sucursalescard) => (
        <div key={sucursal.id_sucursal} className="">
          <SucursalesCard
            id_sucursal={sucursal.id_sucursal}
            nombre_sucursal={sucursal.nombre_sucursal}
            estado={sucursal.nombre_estado}
            fecha_creacion={sucursal.fecha_creacion_sucursal}
            fecha_modificacion={sucursal.fecha_modificacion_sucursal}
            data={data}
            nro_record={sucursal.id_sucursal}
          />
        </div>
    ))}
  </div>
    }
    </div>
  );
}

export default SucursalesTable;
