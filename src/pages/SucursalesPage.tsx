import ButtonExport from "../components/common/ButtonExport";
import ButtonNew from "../components/common/ButtonNew";
import Navbar from "../components/Navbar/Navbar";
import SucursalesTable from "../components/Sucursales/SucursalesTable";
import TitlePage from "../components/common/TitlePage";

function SucursalesPage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Sucursales" />
        <div className="flex justify-end gap-2">
          {/* <ButtonNew/> */}
          <ButtonExport />
        </div>
        <SucursalesTable />
      </div>
    </div>
  );
}

export default SucursalesPage;
