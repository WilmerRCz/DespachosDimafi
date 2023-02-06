
import Logout from "../components/Logout";
import Nav from "../components/Nav";
import DespachosTable from "../components/DespachosTable";
import Table from "../components/Table";
import TitlePage from "../components/TitlePage";

function HomePage() {
  return (
      <div>
        <TitlePage title="Home" />
        <Nav />
        <Logout />
        <DespachosTable />
      </div>

  );
}

export default HomePage;
