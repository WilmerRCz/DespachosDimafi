import {yupResolver} from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Sucursales } from "../../../interface/Sucursales";
import { createSucursal } from "../../../api/resSucursales";
import { sucursalSchema } from "../../../schemas/sucursalSchema";
import { errorToast, successToast } from '../../../utilities/showToast'

interface Props {
  onClose: () => void
}

export default function useFormNewSucursal({onClose}: Props) {
  const queryClient = useQueryClient();
  const createNewSucursal = useMutation({
    mutationFn: createSucursal,
    onSuccess: () => {
      successToast("Sucursal creada!");
      queryClient.invalidateQueries({ queryKey: ["sucursales"] });
      reset()
      onClose()
    },
    onError: () => {
      errorToast('Ha ocurrido un error al crear la sucursal')
    }
  });

  const { register, handleSubmit, reset, formState:{errors} } = useForm<Sucursales>({
    resolver: yupResolver(sucursalSchema)
  });
  const onSubmit: SubmitHandler<Sucursales> = (data) => {
    // console.log(data)
    createNewSucursal.mutate(data)
  };

  return {
    errors,
    register,
    onSubmit,
    handleSubmit,
  };
}