import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth";

interface Props {
  isAllowed: Boolean;
}


export const ProtectedRoutePublic = ({ isAllowed }: Props) => {
  const token = useAuthStore((state) => state.token);
  if (isAllowed && token.length > 160) {
    return <Navigate to={"/home"} />;
  }

  return <Outlet />;
};