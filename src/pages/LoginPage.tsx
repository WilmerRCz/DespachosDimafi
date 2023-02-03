import { submitLogin } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { DecodedToken } from "../interface/DecodedToken";
import jwt_decode from 'jwt-decode';



function LoginPage() {
  const setToken = useAuthStore((state) => state.setToken);
  const setPrivilegio = useAuthStore((state) => state.setPrivilegio);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correo = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const contrasena = (e.currentTarget.elements[1] as HTMLInputElement).value;
    try {
      const responseLogin = await submitLogin(correo, contrasena);
      const decodedtoken: DecodedToken = jwt_decode(responseLogin.token);
      setToken(responseLogin.token);
      setUser(`${decodedtoken.nombre} ${decodedtoken.apellido}`);
      setPrivilegio(decodedtoken.privilegio);

      navigate("/home");
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="email@email.com"
        />
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          placeholder="*******"
        />
        <button>Iniciar Sesión</button>
      </form>
    </>
  );
}

export default LoginPage;
