import Navbar from "../components/Navbar";
import TitlePage from "../components/TitlePage";

function NotPermissionPage() {
  return (
    <>
      <Navbar />
      <div className="sm:container mx-auto">
        <TitlePage title="No tienes Permisos" />
      </div>
    </>
  );
}

export default NotPermissionPage;
