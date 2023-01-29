import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Sucursales from "../pages/Sucursales";
import Usuarios from "../pages/Usuarios";
import Vehiculos from "../pages/Vehiculos";


function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route element={<PublicRoute />}> */}
            <Route path="/" index element={<Login />} />
            <Route path="/login" element={<Login />} />
          {/* </Route> */}
          {/* <Route element={<PrivateRoute />}> */}
            <Route path="/home" index element={<Home />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/vehiculos" element={<Vehiculos />} />
            <Route path="/sucursales" element={<Sucursales />} />
            <Route path="/dashboard" element={<Dashboard />} />
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes