import { submitLogin } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { DecodedToken } from "../interface/DecodedToken";
import jwt_decode from "jwt-decode";
import { useUserStore } from "../store/user";
import { errorToast, successToast } from '../utilities/showToast'
import useFormLogin from '../components/Login/hooks/useFormLogin'
import InputForDrawer from '../components/common/InputForDrawer'

function LoginPage() {
  const setToken = useAuthStore((state) => state.setToken);
  const setPrivilegio = useUserStore((state) => state.setPrivilegio);
  const setName = useUserStore((state) => state.setName);
  const setSucursal = useUserStore((state) => state.setSucursal);
  const navigate = useNavigate();

  // const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const correo = (e.currentTarget.elements[0] as HTMLInputElement).value;
  //   const contrasena = (e.currentTarget.elements[1] as HTMLInputElement).value;
  //   try {
  //     const responseLogin = await submitLogin(correo, contrasena);
  //     const decodedtoken: DecodedToken = jwt_decode(responseLogin.token);
  //     setToken(responseLogin.token);
  //     setName(`${decodedtoken.nombre} ${decodedtoken.apellido}`);
  //     setSucursal(decodedtoken.sucursal);
  //     setPrivilegio(decodedtoken.privilegio);

  //     successToast('Sesión Iniciada!')
  //     navigate("/home");
  //   } catch (error: any) {
  //     errorToast('Correo o contraseña incorrecta')
  //   }
  // }

  const { handleSubmit, register, onSubmit, errors } = useFormLogin()


  return (
    <section className="bg-gray-50 ">
      <div className="h-screen flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
              <img className="w-60" src="/src/assets/LOGO DIMAFI.png" alt="logo" />   
          </div>
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                      Inicia sesión con tu cuenta
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                      <div>
                          <InputForDrawer
                            label="Correo"
                            register={register}
                            name="correo"
                            placeholder="email@email.com"
                            type="email"
                            required={true}
                            errorMessage={errors.correo?.message}
                            />                  
                      </div>
                      <div>
                        <InputForDrawer
                          label="Contraseña"
                          register={register}
                          name="contrasena"
                          placeholder="*******"
                          type="password"
                          required={true}
                          errorMessage={errors.contrasena?.message}
                          />                      
                      </div>
                      <button className="w-full text-gray-900 border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Iniciar Sesión</button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  );
}

export default LoginPage;
