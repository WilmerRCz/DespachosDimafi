import ButtonExport from "../components/ButtonExport";
import ButtonNew from "../components/ButtonNew";
import Navbar from "../components/Navbar/Navbar";
import TitlePage from "../components/TitlePage";
import UsuariosTable from "../components/UsuariosTable";

function UsuariosPage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Usuarios" />
        <div className="flex justify-end gap-2">
          <ButtonNew/>
          <ButtonExport />
        </div>
        <UsuariosTable />
      </div>
    </div>
  );
}

export default UsuariosPage;
