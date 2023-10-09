import { submitLogin } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { DecodedToken } from "../interface/DecodedToken";
import jwt_decode from "jwt-decode";
import { useUserStore } from "../store/user";
import { errorToast, successToast } from '../utilities/showToast'

function LoginPage() {
  const setToken = useAuthStore((state) => state.setToken);
  const setPrivilegio = useUserStore((state) => state.setPrivilegio);
  const setName = useUserStore((state) => state.setName);
  const setSucursal = useUserStore((state) => state.setSucursal);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correo = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const contrasena = (e.currentTarget.elements[1] as HTMLInputElement).value;
    try {
      const responseLogin = await submitLogin(correo, contrasena);
      const decodedtoken: DecodedToken = jwt_decode(responseLogin.token);
      setToken(responseLogin.token);
      setName(`${decodedtoken.nombre} ${decodedtoken.apellido}`);
      setSucursal(decodedtoken.sucursal);
      setPrivilegio(decodedtoken.privilegio);

      successToast('Sesión Iniciada!')
      navigate("/home");
    } catch (error: any) {
      errorToast('Correo o contraseña incorrecta')
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
