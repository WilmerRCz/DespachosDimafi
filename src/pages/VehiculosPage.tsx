import Logout from "../components/Logout";
import Nav from "../components/Nav";
import TitlePage from "../components/TitlePage";
import VehiculosTable from "../components/VehiculosTable";

function VehiculosPage() {
  return (
    <div>
      <TitlePage title="Vehiculos"/>
      <Nav />
      <Logout />
      <VehiculosTable />
    </div>
  );
}

export default VehiculosPage;
