import TitlePage from "../components/common/TitlePage";
import Navbar from "../components/Navbar/Navbar";
import DespachosTable from "../components/Despachos/DespachosTable";
import ButtonExport from "../components/common/ButtonExport";
import useModal from '../hooks/useModal';
import FormNewDespacho from "../components/Despachos/FormDespachos/FormNewDespacho";
import ButtonNew from "../components/common/ButtonNew";
import { DiccionarioRoles } from '../interface/DiccionarioRoles'
import { verifyRoleInComponent } from '../utilities/verifyRoleInComponent'
import { getDespachosExcel } from '../api/resDespachos'

function HomePage() {
const {open, showDrawer, onClose} = useModal()
const { Administrador, Coordinador, Despachador, Lector} = DiccionarioRoles

  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Despachos" />
        <div className="flex justify-end gap-2">
        { verifyRoleInComponent([Despachador, Lector])
          &&
            <ButtonNew open={open} showDrawer={showDrawer} onClose={onClose} title={"Crea un nuevo despacho"} idForm={"formNewDespacho"}>
              <FormNewDespacho onClose={onClose}/>
            </ButtonNew> 
        }
        { verifyRoleInComponent([Despachador])
          &&
            <ButtonExport onClick={getDespachosExcel()} nameFile='despachos'/>
        }     
        </div>
        <DespachosTable/>
      </div>
    </div>
  );
}

export default HomePage;
