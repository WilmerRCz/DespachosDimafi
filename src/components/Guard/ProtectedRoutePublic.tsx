import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import { DecodedToken } from "../../interface/DecodedToken";
import jwt_decode from "jwt-decode";

interface Props {
  isAllowed: Boolean;
}

export const ProtectedRoutePublic = ({ isAllowed }: Props) => {
  try {
    const token = useAuthStore((state) => state.token);
    const decodedtoken: DecodedToken = jwt_decode(token);
    if (decodedtoken.auth && isAllowed) {
      return <Navigate to={"/home"} />;
    }
    return <Outlet />;
  } catch (error) {
    return <Outlet />;
  }
};
