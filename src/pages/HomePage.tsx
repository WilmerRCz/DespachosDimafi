import TitlePage from "../components/common/TitlePage";
import Navbar from "../components/Navbar/Navbar";
import DespachosTable from "../components/Despachos/DespachosTable";
import ButtonExport from "../components/common/ButtonExport";
import ButtonNewDespacho from "../components/Despachos/ButtonNewDespacho";
import useModal from '../hooks/useModal';

function HomePage() {
const {open, showDrawer, onClose} = useModal()

  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Despachos" />
        <div className="flex justify-end gap-2">
          <ButtonNewDespacho open={open} showDrawer={showDrawer} onClose={onClose}/>
          <ButtonExport />
        </div>
        <DespachosTable/>
      </div>
    </div>
  );
}

export default HomePage;
