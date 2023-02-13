import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/Guard/ProtectedRoute";
import { ProtectedRouteForRole } from "../components/Guard/ProtectedRouteForRole";
import { ProtectedRoutePublic } from "../components/Guard/ProtectedRoutePublic";
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
  const ROL = {
    admin: 1,
    coordinador: 2,
    despachador: 3,
    lector: 4,
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Publicas */}
        <Route element={<ProtectedRoutePublic isAllowed={isAuth} />}>
          <Route path="/" index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Rutas Privadas */}
        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route
            element={
              <ProtectedRouteForRole
                allowedRoles={[
                  ROL.admin,
                  ROL.coordinador,
                  ROL.despachador,
                  ROL.lector,
                ]}
              />
            }
          >
            <Route path="/home" index element={<HomePage />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route
            element={
              <ProtectedRouteForRole
                allowedRoles={[ROL.admin, ROL.coordinador, ROL.lector]}
              />
            }
          >
            <Route path="/usuarios" element={<UsuariosPage />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route
            element={
              <ProtectedRouteForRole
                allowedRoles={[ROL.admin, ROL.coordinador, ROL.lector]}
              />
            }
          >
            <Route path="/vehiculos" element={<VehiculosPage />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route
            element={
              <ProtectedRouteForRole
                allowedRoles={[ROL.admin, ROL.coordinador, ROL.lector]}
              />
            }
          >
            <Route path="/sucursales" element={<SucursalesPage />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route
            element={
              <ProtectedRouteForRole
                allowedRoles={[ROL.admin, ROL.coordinador, ROL.lector]}
              />
            }
          >
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route
            element={
              <ProtectedRouteForRole
                allowedRoles={[
                  ROL.admin,
                  ROL.coordinador,
                  ROL.despachador,
                  ROL.lector,
                ]}
              />
            }
          >
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
