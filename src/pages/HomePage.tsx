
import Logout from "../components/Logout";
import Nav from "../components/Nav";
import DespachosTable from "../components/DespachosTable";
import TitlePage from "../components/TitlePage";
import TablePrueba from "../components/TablePrueba";
import Sidebar from "../components/Sidebar";

function HomePage() {
  return (
      <div>
        <Sidebar/>
        <TitlePage title="Home" />
        <Nav />
        <Logout />
      </div>

  );
}

export default HomePage;
