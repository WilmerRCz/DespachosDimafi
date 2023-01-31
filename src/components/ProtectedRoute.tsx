import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAllowed: Boolean;
}


export const ProtectedRoute = ({ isAllowed }: Props) => {
  if (!isAllowed) {
    return <Navigate to={"/login"} />;
    
  }

  return <Outlet />;
};
