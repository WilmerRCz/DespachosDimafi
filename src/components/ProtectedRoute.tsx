import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth";

interface Props {
  isAllowed: Boolean;
  allowedRoles: number[];
}


export const ProtectedRoute = ({ isAllowed, allowedRoles }: Props) => {
  const roles: any = useAuthStore((state) => state.privilegio);
  if (!isAllowed) {
    return <Navigate to={"/login"} />;
    
  }

  if(!allowedRoles?.includes(roles)){
    return <Navigate to={"/NotPermissionPage"} />;
  }

  return <Outlet />;
};
