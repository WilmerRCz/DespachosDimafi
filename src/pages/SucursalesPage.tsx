import Logout from "../components/Logout";
import Nav from "../components/Nav";
import SucursalesTable from "../components/SucursalesTable";

function SucursalesPage() {
  return (
    <div>
      <h1>Sucursales</h1>
      <Nav />
      <Logout />
      <SucursalesTable/>
    </div>
  );
}

export default SucursalesPage;
