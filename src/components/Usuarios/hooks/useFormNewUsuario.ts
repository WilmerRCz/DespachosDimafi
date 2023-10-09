import {yupResolver} from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsuario } from "../../../api/resUsuarios";
import { Usuarios } from "../../../interface/Usuario";
import { usuarioSchema } from '../../../schemas/usuarioSchema';
import { errorToast, successToast } from '../../../utilities/showToast'

interface Props {
  onClose: () => void
}

export default function useFormNewUsuario({ onClose }: Props) {
  const queryClient = useQueryClient();
  const createNewUsuario = useMutation({
    mutationFn: createUsuario,
    onSuccess: () => {
      successToast("Usuario creado!");
      queryClient.invalidateQueries({ queryKey: ["usuarios"] });
      reset()
      onClose()
    },
    onError: () => {
      errorToast('Ha ocurrido un error al crear el usuario')
    }
  });

  const { register, handleSubmit, reset, formState:{errors} } = useForm<Usuarios>({
    resolver: yupResolver(usuarioSchema)
  });
  const onSubmit: SubmitHandler<Usuarios> = (data) => {
    // console.log(data)
    createNewUsuario.mutate(data)
  };

  return {
    errors,
    register,
    onSubmit,
    handleSubmit,
  };
}