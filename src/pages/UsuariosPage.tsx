import Logout from "../components/Logout";
import Nav from "../components/Nav";
import TitlePage from "../components/TitlePage";
import UsuariosTable from "../components/UsuariosTable";

function UsuariosPage() {
  return (
    <div>
      <TitlePage title="Usuarios"/>
      <Nav />
      <Logout />
      <UsuariosTable />
    </div>
  );
}

export default UsuariosPage;
