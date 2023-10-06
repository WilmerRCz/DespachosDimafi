import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/Guard/ProtectedRoute";
import { ProtectedRouteForRole } from "../components/Guard/ProtectedRouteForRole";
import { ProtectedRoutePublic } from "../components/Guard/ProtectedRoutePublic";
const DashboardPage = lazy(() => import("../pages/DashboardPage"))
const LazyHomePage = lazy(() => import("../pages/HomePage")) 
const LoginPage = lazy(() => import("../pages/LoginPage"))
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"))
const SucursalesPage = lazy(() => import("../pages/SucursalesPage"))
const UsuariosPage = lazy(() => import("../pages/UsuariosPage"))
const VehiculosPage = lazy(() => import("../pages/VehiculosPage"))
import { useAuthStore } from "../store/auth";
import SpinnerLoading from '../components/common/SpinnerLoading'

function AppRoutes() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const ROL = {
    admin: 1,
    coordinador: 2,
    despachador: 3,
    lector: 4,
  };
  return (
    <Suspense fallback={<SpinnerLoading size={38}/>}>
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
            <Route path="/home" index element={<LazyHomePage />} />
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
    </Suspense>
  );
}

export default AppRoutes;
