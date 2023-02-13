import Navbar from "../components/Navbar";
import SucursalesTable from "../components/SucursalesTable";
import TitlePage from "../components/TitlePage";

function SucursalesPage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container mx-auto">
        <TitlePage title="Sucursales" />
        <SucursalesTable />
      </div>
    </div>
  );
}

export default SucursalesPage;
