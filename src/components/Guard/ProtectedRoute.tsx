import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import jwt_decode from "jwt-decode";
import { DecodedToken } from "../../interface/DecodedToken"
import { validateExpDateToken } from '../../utilities/validateExpDateToken'
import { errorToast } from '../../utilities/showToast'

interface Props {
  isAllowed: Boolean;
}

// del token guardado en el state, decodificarlo y sacarle el privilegio
export const ProtectedRoute = ({ isAllowed }: Props) => {
  try {
    const token = useAuthStore((state) => state.token);
    const decodedtoken: DecodedToken = jwt_decode(token);
    // console.log(decodedtoken)

    if (validateExpDateToken(decodedtoken.exp)){
      errorToast('Sesión caducada!')
      return <Navigate to={"/login"} />
    } 
    
    if (!decodedtoken.auth || !isAllowed) {
      return <Navigate to={"/login"} />;
    }
    return <Outlet />;
  } catch (error) {
    return <Navigate to={"/login"} />;
  }
};
