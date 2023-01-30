import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import SucursalesPage from "../pages/SucursalesPage";
import UsuariosPage from "../pages/UsuariosPage";
import VehiculosPage from "../pages/VehiculosPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PublicRoute />}> */}
        <Route path="/" index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* </Route> */}
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/home" index element={<HomePage />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/vehiculos" element={<VehiculosPage />} />
        <Route path="/sucursales" element={<SucursalesPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
