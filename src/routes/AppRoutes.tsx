import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import SucursalesPage from "../pages/SucursalesPage";
import UsuariosPage from "../pages/UsuariosPage";
import VehiculosPage from "../pages/VehiculosPage";
import { useAuthStore } from "../store/auth";

function AppRoutes() {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PublicRoute />}> */}
        <Route path="/" index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* </Route> */}
        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path="/home" index element={<HomePage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/vehiculos" element={<VehiculosPage />} />
          <Route path="/sucursales" element={<SucursalesPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
