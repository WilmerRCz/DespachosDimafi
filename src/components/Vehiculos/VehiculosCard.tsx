import useScreenSize from '../../hooks/useScreenSize'
import { DiccionarioRoles } from '../../interface/DiccionarioRoles'
import { showDate } from "../../utilities/showDate";
import { verifyRoleInComponent } from '../../utilities/verifyRoleInComponent'
import ButtonEditVehiculo from './ButtonEditVehiculo'
import InactiveStyle from '../common/InactiveStyle';
import { convertDate } from '../../utilities/convertDate'


interface Props {
  patente: string;
  sucursal: string
  fecha_creación: string;
  estado: string;
  fecha_modificacion: string
  nro_record?: any;
  data?: any;
}

function VehiculosCard({
  patente,
  sucursal,
  fecha_creación,
  estado,
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
                <span className="text-blue-500 font-bold">{patente.toUpperCase()}</span>
              </div>
              <div>
                <span className="font-semibold">{sucursal}</span>
              </div>
              <div>
                <InactiveStyle estado={estado} />
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-black">
                Creación: 
              </span>
              <span className="text-sm text-black"> {convertDate(fecha_creación)}</span>
            </div>
            <div>
              <span className="text-sm font-medium text-black">Modificación: </span>
              <span className="text-sm text-black"> {convertDate(fecha_modificacion)}</span>
            </div>
          </div>
          <div className="self-center">
            {verifyRoleInComponent([Despachador, Lector])
              &&
              <ButtonEditVehiculo
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

export default VehiculosCard;