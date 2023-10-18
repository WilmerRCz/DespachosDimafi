import useScreenSize from '../../hooks/useScreenSize'
import { DiccionarioRoles } from '../../interface/DiccionarioRoles'
import { verifyRoleInComponent } from '../../utilities/verifyRoleInComponent'
import InactiveStyle from '../common/InactiveStyle';
import { convertDate } from '../../utilities/convertDate'
import ButtonEditSucursal from './ButtonEditSucursal'


interface Props {
  id_sucursal: number;
  nombre_sucursal: string
  estado: string;
  fecha_creacion: string;
  fecha_modificacion: string
  nro_record?: any;
  data?: any;
}

function SucursalesCard({
  id_sucursal,
  nombre_sucursal,
  estado,
  fecha_creacion,
  fecha_modificacion,
  nro_record,
  data,
}: Props) {

  const { Despachador, Lector } = DiccionarioRoles
  const { width } = useScreenSize()

  return (
    <div className="grid grid-cols-1 gap-4 m-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-sm ">
              <div>
                <span className="text-blue-500 font-bold">#{id_sucursal}</span>
              </div>
              <div>
                <span className="font-semibold">{nombre_sucursal}</span>
              </div>
              <div>
                <InactiveStyle estado={estado} />
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-black">
                Creación: 
              </span>
              <span className="text-sm text-black"> {convertDate(fecha_creacion)}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-black">Modificación: </span>
              <span className="text-sm text-black"> {convertDate(fecha_modificacion)}</span>
            </div>
          </div>
          <div className="self-center">
            {verifyRoleInComponent([Despachador, Lector])
              &&
              <ButtonEditSucursal
                nro_record={nro_record}
                data={data}
                sizeButton={24}
                sizeDrawer={width}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default SucursalesCard;