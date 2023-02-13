import TitlePage from "../components/TitlePage";
import Navbar from "../components/Navbar";
import DespachosTable from "../components/Despachos/DespachosTable";
import ButtonNew from "../components/ButtonNew";
import ButtonExport from "../components/ButtonExport";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Despachos" />
        <div className="flex justify-end gap-2">
          <ButtonNew />
          <ButtonExport />
        </div>

        <DespachosTable />
      </div>
    </div>
  );
}

export default HomePage;
