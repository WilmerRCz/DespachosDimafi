import {yupResolver} from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUsuario } from "../../../api/resUsuarios";
import { Usuarios } from "../../../interface/Usuario";
import { editUsuarioSchema } from '../../../schemas/usuarioSchema';
import { errorToast, successToast } from '../../../utilities/showToast'

interface Props {
  onClose: () => void
  dataUsuario: Usuarios
}

export default function useFormEditUsuario({ onClose, dataUsuario }: Props) {
  const queryClient = useQueryClient();
  const updateUsuarioMutation = useMutation({
    mutationFn: updateUsuario,
    onSuccess: () => {
      successToast("Usuario editado!");
      queryClient.invalidateQueries({ queryKey: ["usuarios"] })
      queryClient.invalidateQueries({ queryKey: ["DespachadoresActivos"] })
      onClose()
      
    },
    onError: () => {
      errorToast('Ha ocurrido un error al editar el usuario')
    }
  });

  const { register, handleSubmit, formState:{errors} } = useForm<Usuarios>({
    resolver: yupResolver(editUsuarioSchema)
  });

  
  const onSubmit: SubmitHandler<Usuarios> = (data) => {
    // console.log(data)
    updateUsuarioMutation.mutate({
      ...data,
      id_usuario: dataUsuario?.id_usuario
    })
    
  };

  return {
    errors,
    register,
    onSubmit,
    handleSubmit,
  };
}