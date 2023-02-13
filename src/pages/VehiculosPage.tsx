import Navbar from "../components/Navbar";
import TitlePage from "../components/TitlePage";
import VehiculosTable from "../components/VehiculosTable";

function VehiculosPage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container mx-auto">
        <TitlePage title="Vehiculos" />
        <VehiculosTable />
      </div>
    </div>
  );
}

export default VehiculosPage;
