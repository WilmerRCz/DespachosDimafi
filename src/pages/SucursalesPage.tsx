import ButtonExport from "../components/common/ButtonExport";
import ButtonNew from "../components/common/ButtonNew";
import Navbar from "../components/Navbar/Navbar";
import SucursalesTable from "../components/Sucursales/SucursalesTable";
import TitlePage from "../components/common/TitlePage";
import useModal from "../hooks/useModal";
import FormNewSucursal from "../components/Sucursales/FormNewSucursal";
import { verifyRoleInComponent } from '../utilities/verifyRoleInComponent'
import { DiccionarioRoles } from '../interface/DiccionarioRoles'
import { getSucursalesExcel } from '../api/resSucursales'

function SucursalesPage() {
  const {open, showDrawer, onClose} = useModal()
  const { Administrador, Coordinador, Despachador, Lector} = DiccionarioRoles

  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Sucursales" />
        <div className="flex justify-end gap-2">
        { verifyRoleInComponent([Despachador, Lector])
          &&
          <ButtonNew open={open} showDrawer={showDrawer} onClose={onClose} title={"Crea una nueva sucursal"} idForm={"formNewSucursal"}>
            <FormNewSucursal onClose={onClose}/>
          </ButtonNew>
        }
        { verifyRoleInComponent([Despachador])
          &&
          <ButtonExport onClick={getSucursalesExcel()} nameFile='sucursales'/>
        }
        </div>
        <SucursalesTable />
      </div>
    </div>
  );
}

export default SucursalesPage;
