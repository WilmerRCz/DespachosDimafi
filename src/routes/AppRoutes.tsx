import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/Guard/ProtectedRoute";
import { ProtectedRouteForRole } from "../components/Guard/ProtectedRouteForRole";
import { ProtectedRoutePublic } from "../components/Guard/ProtectedRoutePublic";
const LazyDashboardPage = lazy(() => import("../pages/DashboardPage"))
const LazyHomePage = lazy(() => import("../pages/HomePage")) 
const LazyLoginPage = lazy(() => import("../pages/LoginPage"))
const LazyNotFoundPage = lazy(() => import("../pages/NotFoundPage"))
const LazySucursalesPage = lazy(() => import("../pages/SucursalesPage"))
const LazyUsuariosPage = lazy(() => import("../pages/UsuariosPage"))
const LazyVehiculosPage = lazy(() => import("../pages/VehiculosPage"))
const LazyNotPermissionPage = lazy(() => import("../pages/NotPermissionPage"))
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
          <Route path="/" index element={<LazyLoginPage />} />
          <Route path="/login" element={<LazyLoginPage />} />
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
            <Route path="/usuarios" element={<LazyUsuariosPage />} />
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
            <Route path="/vehiculos" element={<LazyVehiculosPage />} />
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
            <Route path="/sucursales" element={<LazySucursalesPage />} />
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
            <Route path="/dashboard" element={<LazyDashboardPage />} />
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
            <Route path="/notpermissionpage" element={<LazyNotPermissionPage />} />
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
            <Route path="*" element={<LazyNotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </Suspense>
  );
}

export default AppRoutes;
