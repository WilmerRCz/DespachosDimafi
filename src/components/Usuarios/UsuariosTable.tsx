import { getUsuarios } from "../../api/resUsuarios";
import { useQuery } from "@tanstack/react-query";
import { Usuarios } from "../../interface/Usuario";
import { AlignType } from "rc-table/lib/interface";
import { Table } from "antd";
import SpinnerLoading from "../common/SpinnerLoading";
import InactiveStyle from "../common/InactiveStyle";
import ButtonEditUsuario from "./ButtonEditUsuario";
import ErrorReactQuery from '../common/ErrorReactQuery'


function UsuariosTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["usuarios"],
    queryFn: getUsuarios,
  });

  if (isLoading) return <SpinnerLoading size={28}/>;
  else if (isError) return <ErrorReactQuery/>
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      align: "center" as AlignType,
      className: "font-bold",
    },
    {
      title: "Nombre Completo",
      dataIndex: "nombre",
      key: "nombre",
      align: "center" as AlignType,
    },
    {
      title: "Correo",
      dataIndex: "correo",
      key: "correo",
      align: "center" as AlignType,
    },
    {
      title: "Privilegio",
      dataIndex: "privilegio",
      key: "privilegio",
      align: "center" as AlignType,
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
      title: "Acciones",
      dataIndex: "acciones",
      key: "acciones",
      align: "center" as AlignType,
      render: (text: any, record: any, index: any) => {
        return (
          <div className="flex gap-4 justify-center">
            <ButtonEditUsuario
              nro_record={record.id}
              data={data}
              sizeButton={19}
              sizeDrawer={500}
            />
          </div>
        );
      },
    },
  ];

  const fileData = data.map((usuario: Usuarios) => ({
    key: usuario.id_usuario,
    id: usuario.id_usuario,
    nombre: `${usuario.nombre_usuario} ${usuario.apellido_usuario}`,
    correo: usuario.correo,
    privilegio: usuario.privilegio,
    sucursal: usuario.nombre_sucursal,
    estado: usuario.nombre_estado,
  }));

  return (
    <div>
    <div className="mt-2">
      <Table columns={columns} dataSource={fileData} />
    </div>
  </div>
  )
}

export default UsuariosTable;
