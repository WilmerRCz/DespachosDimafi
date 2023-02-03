import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth";

interface Props {
  isAllowed: Boolean;
}


export const ProtectedRoute = ({ isAllowed }: Props) => {
  const token = useAuthStore((state) => state.token);
  if(token.length < 160){
    return <Navigate to={"/login"} />;
  }
  else if (!isAllowed) {
    
    return <Navigate to={"/login"} />;
    
  }

  return <Outlet />;
};
