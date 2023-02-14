import ButtonExport from "../components/ButtonExport";
import ButtonNew from "../components/ButtonNew";
import Navbar from "../components/Navbar/Navbar";
import SucursalesTable from "../components/SucursalesTable";
import TitlePage from "../components/TitlePage";

function SucursalesPage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Sucursales" />
        <div className="flex justify-end gap-2">
          <ButtonNew/>
          <ButtonExport />
        </div>
        <SucursalesTable />
      </div>
    </div>
  );
}

export default SucursalesPage;
