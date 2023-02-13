import Navbar from "../components/Navbar";
import TitlePage from "../components/TitlePage";
import UsuariosTable from "../components/UsuariosTable";

function UsuariosPage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container mx-auto">
        <TitlePage title="Usuarios" />
        <UsuariosTable />
      </div>
    </div>
  );
}

export default UsuariosPage;
