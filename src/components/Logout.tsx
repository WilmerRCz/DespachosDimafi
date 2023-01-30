import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

function Logout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        logout();
        navigate("/login");
      }}
    >
      Logout
    </button>
  );
}

export default Logout;
