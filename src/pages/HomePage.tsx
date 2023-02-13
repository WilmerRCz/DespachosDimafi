import TitlePage from "../components/TitlePage";
import Navbar from "../components/Navbar";
import DespachosTable from "../components/Despachos/DespachosTable";
import ButtonNew from "../components/ButtonNew";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container mx-auto">
        <TitlePage title="Despachos" />
        <ButtonNew/>
        <DespachosTable/>
      </div>
    </div>
  );
}

export default HomePage;
