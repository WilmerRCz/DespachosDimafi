
import Logout from "../components/Logout";
import Nav from "../components/Nav";
import DespachosTable from "../components/DespachosTable";
import TitlePage from "../components/TitlePage";
import TablePrueba from "../components/TablePrueba";

function HomePage() {
  return (
      <div>
        <TitlePage title="Home" />
        <Nav />
        <Logout />
        <DespachosTable />
        <TablePrueba />
      </div>

  );
}

export default HomePage;
