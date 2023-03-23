import ButtonExport from "../components/common/ButtonExport";
import ButtonNew from "../components/Despachos/ButtonNewDespacho";
import Navbar from "../components/Navbar/Navbar";
import TitlePage from "../components/common/TitlePage";
import VehiculosTable from "../components/Vehiculos/VehiculosTable";

function VehiculosPage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Vehiculos" />
        <div className="flex justify-end gap-2">
          {/* <ButtonNew/> */}
          <ButtonExport />
        </div>
        <VehiculosTable />
      </div>
    </div>
  );
}

export default VehiculosPage;
