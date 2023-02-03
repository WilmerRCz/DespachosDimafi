import Logout from "../components/Logout";
import Nav from "../components/Nav";
import SucursalesTable from "../components/SucursalesTable";
import TitlePage from "../components/TitlePage";

function SucursalesPage() {
  return (
    <div>
      <TitlePage title="Sucursales" />
      <Nav />
      <Logout />
      <SucursalesTable />
    </div>
  );
}

export default SucursalesPage;
