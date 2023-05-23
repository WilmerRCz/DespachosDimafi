import ButtonExport from "../components/common/ButtonExport";
import Navbar from "../components/Navbar/Navbar";
import TitlePage from "../components/common/TitlePage";
import UsuariosTable from "../components/Usuarios/UsuariosTable";
import useModal from "../hooks/useModal";
import ButtonNew from "../components/common/ButtonNew";
import FormNewUsuario from "../components/Usuarios/FormNewUsuario";

function UsuariosPage() {
  const {open, showDrawer, onClose} = useModal()
  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Usuarios" />
        <div className="flex justify-end gap-2">
          <ButtonNew open={open} showDrawer={showDrawer} onClose={onClose} title={"Crea un nuevo usuario"} idForm={"formNewUsuario"}>
            <FormNewUsuario onClose={onClose}/>
          </ButtonNew>
          <ButtonExport />
        </div>
        <UsuariosTable />
      </div>
    </div>
  );
}

export default UsuariosPage;
