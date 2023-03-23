import ButtonExport from "../components/common/ButtonExport";
import ButtonNew from "../components/Despachos/ButtonNewDespacho";
import Navbar from "../components/Navbar/Navbar";
import TitlePage from "../components/common/TitlePage";
import UsuariosTable from "../components/Usuarios/UsuariosTable";

function UsuariosPage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Usuarios" />
        <div className="flex justify-end gap-2">
          {/* <ButtonNew/> */}
          <ButtonExport />
        </div>
        <UsuariosTable />
      </div>
    </div>
  );
}

export default UsuariosPage;
