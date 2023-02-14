import Navbar from "../components/Navbar/Navbar";
import TitlePage from "../components/TitlePage";

function NotPermissionPage() {
  return (
    <>
      <Navbar />
      <div className="sm:container xl:px-16 mx-auto">
        <TitlePage title="No tienes Permisos" />
      </div>
    </>
  );
}

export default NotPermissionPage;
