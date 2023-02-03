
import Logout from "../components/Logout";
import Nav from "../components/Nav";
import DespachosTable from "../components/DespachosTable";

function HomePage() {
  return (
      <div>
        <h1>Home</h1>
        <Nav />
        <Logout />
        <DespachosTable />
      </div>

  );
}

export default HomePage;
