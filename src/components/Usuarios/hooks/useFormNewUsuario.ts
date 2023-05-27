import {yupResolver} from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsuario } from "../../../api/resUsuarios";
import { Usuarios } from "../../../interface/Usuario";
import { usuarioSchema } from '../../../schemas/usuarioSchema';

interface Props {
  onClose: () => void
}

export default function useFormNewUsuario({ onClose }: Props) {
  const queryClient = useQueryClient();
  const createNewSucursal = useMutation({
    mutationFn: createUsuario,
    onSuccess: () => {
      alert("Usuario creado!");
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
      reset()
      onClose()
    },
  });

  const { register, handleSubmit, reset, formState:{errors} } = useForm<Usuarios>({
    resolver: yupResolver(usuarioSchema)
  });
  const onSubmit: SubmitHandler<Usuarios> = (data) => {
    console.log(data)
    createNewSucursal.mutate(data)
  };

  return {
    errors,
    register,
    onSubmit,
    handleSubmit,
  };
}