import { Navigate, Outlet } from "react-router-dom";
import { DecodedToken } from "../../interface/DecodedToken";
import { useAuthStore } from "../../store/auth";
import jwt_decode from "jwt-decode";

interface Props {
  allowedRoles: number[];
}

export const ProtectedRouteForRole = ({ allowedRoles }: Props) => {
  try {
    const token = useAuthStore((state) => state.token);
    const decodedtoken: DecodedToken = jwt_decode(token);

    if (!allowedRoles?.includes(decodedtoken.privilegio)) {
      return <Navigate to={"/NotPermissionPage"} replace={true} />;
    }

    return <Outlet />;
  } catch (error) {
    return <Navigate to={"/NotPermissionPage"} replace={true} />;
  }
};
