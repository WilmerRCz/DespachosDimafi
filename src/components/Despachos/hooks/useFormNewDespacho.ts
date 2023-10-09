import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { createDespacho } from "../../../api/resDespachos";
import { Despachos } from "../../../interface/Despachos";
import {yupResolver} from "@hookform/resolvers/yup"
import { despachoSchema } from "../../../schemas/despachoSchema";
import { errorToast, successToast } from '../../../utilities/showToast'

interface Props {
  onClose: () => void
}

export default function useFormNewDespacho({onClose}: Props) {
  const queryClient = useQueryClient();
  const createNewDespacho = useMutation({
    mutationFn: createDespacho,
    onSuccess: () => {
      successToast('Despacho creado!')
      queryClient.invalidateQueries({ queryKey: ["despachos"] });
      reset()
      onClose()
    },
    onError: () => {
      errorToast('Ocurrio un error al crear el despacho')
    }
  });
  const { register, handleSubmit, reset, formState:{errors} } = useForm<Despachos>({
    resolver: yupResolver(despachoSchema)
  });
  const onSubmit: SubmitHandler<Despachos> = (data) => {
    createNewDespacho.mutate(data)
  };

  return {
    onSubmit,
    errors,
    register,
    handleSubmit,
  };
}
