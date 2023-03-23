import Navbar from "../components/Navbar/Navbar";
import TitlePage from "../components/common/TitlePage";

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="Dashboard" />
      </div>
    </div>
  );
}

export default DashboardPage;
