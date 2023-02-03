import Logout from "../components/Logout";
import TitlePage from "../components/TitlePage";

function NotPermissionPage() {
  return (
    <>
      <TitlePage title="No tienes Permisos" />
      <Logout />
    </>
  );
}

export default NotPermissionPage;
