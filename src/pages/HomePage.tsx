import TitlePage from "../components/common/TitlePage";
import Navbar from "../components/Navbar/Navbar";
import DespachosTable from "../components/Despachos/DespachosTable";
import ButtonExport from "../components/common/ButtonExport";
import useModal from '../hooks/useModal';
import FormNewDespacho from "../components/Despachos/FormDespachos/FormNewDespacho";
import ButtonNew from "../components/common/ButtonNew";

function HomePage() {
const {open, showDrawer, onClose} = useModal()

  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Despachos" />
        <div className="flex justify-end gap-2">
          <ButtonNew open={open} showDrawer={showDrawer} onClose={onClose} title={"Crea un nuevo despacho"} idForm={"formNewDespacho"}>
            <FormNewDespacho onClose={onClose}/>
          </ButtonNew>
          <ButtonExport />
        </div>
        <DespachosTable/>
      </div>
    </div>
  );
}

export default HomePage;
