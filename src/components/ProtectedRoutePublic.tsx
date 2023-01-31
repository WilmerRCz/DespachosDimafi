import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAllowed: Boolean;
}


export const ProtectedRoutePublic = ({ isAllowed }: Props) => {
  if (isAllowed) {
    return <Navigate to={"/home"} />;
  }

  return <Outlet />;
};