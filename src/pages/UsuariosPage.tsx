import Logout from "../components/Logout";
import Nav from "../components/Nav";
import UsuariosTable from "../components/UsuariosTable";

function UsuariosPage() {
  return (
    <div>
      <h1>Usuarios</h1>
      <Nav />
      <Logout />
      <UsuariosTable />
    </div>
  );
}

export default UsuariosPage;
