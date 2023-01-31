import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth";

interface Props {
  allowedRoles: number[];
}


export const ProtectedRouteForRole = ({ allowedRoles }: Props) => {
  const roles: any = useAuthStore((state) => state.privilegio);

  if(!allowedRoles?.includes(roles)){
    return <Navigate to={"/NotPermissionPage"} replace={true}/>;
  }

  return <Outlet />;
};
