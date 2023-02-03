
import Logout from "../components/Logout";
import Nav from "../components/Nav";
import TitlePage from "../components/TitlePage";

function DashboardPage() {
  return (
    <div>
      <TitlePage title="Dashboard"/>
      <Nav />
      <Logout />
    </div>
  );
}

export default DashboardPage;
