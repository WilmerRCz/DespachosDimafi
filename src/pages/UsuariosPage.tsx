import ButtonExport from "../components/common/ButtonExport";
import Navbar from "../components/Navbar/Navbar";
import TitlePage from "../components/common/TitlePage";
import UsuariosTable from "../components/Usuarios/UsuariosTable";
import useModal from "../hooks/useModal";
import ButtonNew from "../components/common/ButtonNew";
import FormNewUsuario from "../components/Usuarios/FormNewUsuario";
import { DiccionarioRoles } from '../interface/DiccionarioRoles'
import { verifyRoleInComponent } from '../utilities/verifyRoleInComponent'
import { getUsuariosExcel } from '../api/resUsuarios'

function UsuariosPage() {
  const {open, showDrawer, onClose} = useModal()
  const { Administrador, Coordinador, Despachador, Lector} = DiccionarioRoles

  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Usuarios" />
        <div className="flex justify-end gap-2">
        { verifyRoleInComponent([Despachador, Lector])
          &&
          <ButtonNew open={open} showDrawer={showDrawer} onClose={onClose} title={"Crea un nuevo usuario"} idForm={"formNewUsuario"}>
            <FormNewUsuario onClose={onClose}/>
          </ButtonNew>
        }
        { verifyRoleInComponent([Despachador])
          &&
          <ButtonExport onClick={getUsuariosExcel()} nameFile='usuarios'/>
        }
        </div>
        <UsuariosTable />
      </div>
    </div>
  );
}

export default UsuariosPage;
