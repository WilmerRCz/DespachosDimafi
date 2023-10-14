import {yupResolver} from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { errorToast, successToast } from '../../../utilities/showToast'
import { submitLogin } from '../../../api/auth'
import { Login } from '../../../interface/Login'
import { loginSchema } from '../../../schemas/loginSchema'
import jwt_decode from 'jwt-decode';
import { DecodedToken } from '../../../interface/DecodedToken'
import { useAuthStore } from '../../../store/auth'
import { useUserStore } from '../../../store/user'
import { useNavigate } from 'react-router-dom'

interface Props {
  onClose: () => void
}

export default function useFormLogin() {

  const setToken = useAuthStore((state) => state.setToken);
  const setPrivilegio = useUserStore((state) => state.setPrivilegio);
  const setName = useUserStore((state) => state.setName);
  const setSucursal = useUserStore((state) => state.setSucursal);
  const navigate = useNavigate();

  const login = useMutation({
    mutationFn: submitLogin,
    onSuccess: (data) => {
      const decodedtoken: DecodedToken = jwt_decode(data.token);
      setToken(data.token);
      setName(`${decodedtoken.nombre} ${decodedtoken.apellido}`);
      setSucursal(decodedtoken.sucursal);
      setPrivilegio(decodedtoken.privilegio);
      successToast("Sesión Iniciada!");
      navigate("/home");
    },
    onError: () => {
      errorToast('Correo o contraseña incorrecta')
    }
  });

  const { register, handleSubmit, formState:{errors} } = useForm<Login>({
    resolver: yupResolver(loginSchema)
  });
  const onSubmit: SubmitHandler<Login> = (data) => {
    login.mutate(data)
  };

  return {
    errors,
    register,
    onSubmit,
    handleSubmit,
  };
}