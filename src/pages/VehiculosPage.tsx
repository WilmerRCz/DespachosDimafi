import Logout from "../components/Logout";
import Nav from "../components/Nav";
import VehiculosTable from "../components/VehiculosTable";

function VehiculosPage() {
  return (
    <div>
      <h1>Vehiculos</h1>
      <Nav />
      <Logout />
      <VehiculosTable />
    </div>
  );
}

export default VehiculosPage;
