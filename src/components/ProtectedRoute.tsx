import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import jwt_decode from "jwt-decode";
import { DecodedToken } from "../interface/DecodedToken";

interface Props {
  isAllowed: Boolean;
}

// del token guardado en el state, decodificarlo y sacarle el privilegio
export const ProtectedRoute = ({ isAllowed }: Props) => {
  try {
    const token = useAuthStore((state) => state.token);
    const decodedtoken: DecodedToken = jwt_decode(token);
    if (!decodedtoken.auth || !isAllowed) {
      return <Navigate to={"/login"} />;
    }
    return <Outlet />;
  } catch (error) {
    return <Navigate to={"/login"} />;
  }
};
