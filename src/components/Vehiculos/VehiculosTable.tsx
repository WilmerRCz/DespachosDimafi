import { getVehiculos } from "../../api/resVehiculos";
import { useQuery } from "@tanstack/react-query";
import { Vehiculos, Vehiculoscard } from "../../interface/Vehiculos";
import { Table } from "antd";
import { AlignType } from "rc-table/lib/interface";
import SpinnerLoading from "../common/SpinnerLoading";
import { convertDate } from "../../utilities/convertDate";
import InactiveStyle from "../common/InactiveStyle";
import ButtonEditVehiculo from "./ButtonEditVehiculo";
import ErrorReactQuery from '../common/ErrorReactQuery'
import useScreenSize from '../../hooks/useScreenSize'
import VehiculosCard from './VehiculosCard'

function VehiculosTable() {

  const { width } = useScreenSize()

  const { data, isLoading, isError } = useQuery({
    queryKey: ["vehiculos"],
    queryFn: getVehiculos,
  });

  if (isLoading) return <SpinnerLoading size={28} />;
  else if (isError) return <ErrorReactQuery/>
  const columns = [
    {
      title: "Patente",
      dataIndex: "patente",
      key: "patente",
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
            <ButtonEditVehiculo
              nro_record={record.patente}
              data={data}
              sizeButton={19}
              sizeDrawer={500}
            />
          </div>
        );
      },
    },
  ];

  const fileData = data.map((vehiculo: Vehiculos) => ({
    key: vehiculo.patente,
    patente: vehiculo.patente.toUpperCase(),
    sucursal: vehiculo.nombre_sucursal,
    estado: vehiculo.nombre_estado,
    creacion: convertDate(vehiculo.fecha_creacion_vehiculo),
    modificacion: convertDate(vehiculo.fecha_modificacion_vehiculo),
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
      {data.map((vehiculo: Vehiculoscard) => (
          <div key={vehiculo.patente} className="">
            <VehiculosCard
              patente={vehiculo.patente}
              sucursal={vehiculo.nombre_sucursal}
              estado={vehiculo.nombre_estado}
              fecha_creación={vehiculo.fecha_creacion_vehiculo}
              fecha_modificacion={vehiculo.fecha_modificacion_vehiculo}
              data={data}
              nro_record={vehiculo.patente}
            />
          </div>
      ))}
    </div>
      }
    </div>
  );
}
export default VehiculosTable;
