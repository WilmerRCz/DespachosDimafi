import { useQuery } from '@tanstack/react-query';
import { Table } from 'antd';
import { getDespachos } from '../../api/resDespachos';
import { Despachos } from '../../interface/Despachos';
import { columns } from './columsDespachosTable';

function DespachosTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["despachos"],
    queryFn: getDespachos,
  });


  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  const fileData = 
    data.slice(0).reverse().map((despacho: Despachos) => (
      {
      key: despacho.id_despacho,
      nro: despacho.id_despacho,
      rut: despacho.rut_cliente_despacho,
      direccion: `${despacho.direccion_calle_cliente}, ${despacho.nro_calle_cliente} - ${despacho.nombre_comuna}`,
      despachador: despacho.usuario_despachador,
      estado: despacho.nombre_estado
    }
    ))
  

  return (
    <div className='mt-2'>
      <Table columns={columns} dataSource={fileData} />
    </div>
  )
}

export default DespachosTable