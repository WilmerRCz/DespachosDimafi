import ButtonExport from "../components/common/ButtonExport";
import ButtonNew from '../components/common/ButtonNew';
import Navbar from "../components/Navbar/Navbar";
import TitlePage from "../components/common/TitlePage";
import VehiculosTable from "../components/Vehiculos/VehiculosTable";
import useModal from "../hooks/useModal";
import FormNewVehiculo from "../components/Vehiculos/FormNewVehiculo";


function VehiculosPage() {
  const {open, showDrawer, onClose} = useModal()
  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Vehiculos" />
        <div className="flex justify-end gap-2">
          <ButtonNew open={open} showDrawer={showDrawer} onClose={onClose} title={"Crea un nuevo vehiculo"} idForm={"formNewVehiculo"}>
            <FormNewVehiculo/>
          </ButtonNew>
          <ButtonExport />
        </div>
        <VehiculosTable />
      </div>
    </div>
  );
}

export default VehiculosPage;
