import TitlePage from "../components/TitlePage";
import Navbar from "../components/Navbar/Navbar";
import DespachosTable from "../components/Despachos/DespachosTable";
import ButtonExport from "../components/ButtonExport";
import ButtonNewDespacho from "../components/Despachos/ButtonNewDespacho";

function HomePage() {


  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Despachos" />
        <div className="flex justify-end gap-2">
          <ButtonNewDespacho/>
          <ButtonExport />
        </div>
        <DespachosTable />
      </div>
    </div>
  );
}

export default HomePage;
