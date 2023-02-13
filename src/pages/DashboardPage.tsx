import Navbar from "../components/Navbar";
import TitlePage from "../components/TitlePage";

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <div className="sm:container mx-auto">
        <TitlePage title="Dashboard" />
      </div>
    </div>
  );
}

export default DashboardPage;
