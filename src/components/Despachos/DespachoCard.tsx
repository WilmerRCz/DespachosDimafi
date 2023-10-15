import { DiccionarioRoles } from '../../interface/DiccionarioRoles'
import { showDate } from "../../utilities/showDate";
import { verifyRoleInComponent } from '../../utilities/verifyRoleInComponent'
import EstadoStyled from "../common/EstadoStyled";
import ButtonDeleteDespacho from "./ButtonDeleteDespacho";
import ButtonEditDespacho from "./ButtonEditDespacho";
import ButtonViewDespachoInTable from "./ButtonViewDespachoInTable";

interface Props {
  nro_despacho: number | undefined;
  direccion: string | undefined;
  fecha_creación: string;
  despachador: number | undefined;
  rut_cliente: string | undefined;
  estado_despacho: string;
  total: string | undefined;
  nro_record?: any;
  data?: any;
}

function DespachoCard({
  nro_despacho,
  direccion,
  fecha_creación,
  estado_despacho,
  total,
  nro_record,
  rut_cliente,
  despachador,
  data,
}: Props) {

  const { Despachador, Lector } = DiccionarioRoles


  return (
    <div className="grid grid-cols-1 gap-4 m-4">
      <div className="bg-white p-4 space-y-2 rounded-lg shadow">
        <div className="flex justify-between">
          <div className="">
            <div className="flex items-center space-x-2 text-sm ">
              <div>
                <span className="text-blue-500 font-bold">#{nro_despacho}</span>
              </div>
              <div>
                <span className="text-gray-500">
                  {showDate(fecha_creación)}
                </span>
              </div>
              <div>
                <span className="font-semibold">{rut_cliente}</span>
              </div>
              <div>
                <EstadoStyled estado={estado_despacho} />
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-700">{direccion}</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-black">
                {despachador}
              </span>
            </div>
            <div>
              <span className="text-sm font-medium text-black">${total}</span>
            </div>
          </div>
          <div className="">
            <ButtonViewDespachoInTable
              nro_record={nro_record}
              data={data}
              sizeButton={24}
              sizeDrawer={"w-full"}
            />
            <ButtonEditDespacho
              nro_record={nro_record}
              data={data}
              sizeButton={24}
              sizeDrawer={"w-full"}
            />
            {verifyRoleInComponent([Despachador, Lector])
              &&
              <ButtonDeleteDespacho
                nro_record={nro_record}
                data={data}
                sizeButton={24}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default DespachoCard;
