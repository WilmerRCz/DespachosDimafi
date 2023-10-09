import { Vehiculos } from "../../../interface/Vehiculos";
import {yupResolver} from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createVehiculo } from "../../../api/resVehiculos";
import { vehiculoSchema } from "../../../schemas/vehiculoSchema";
import { errorToast, successToast } from '../../../utilities/showToast'

interface Props {
  onClose: () => void
}

export default function useFormNewVehiculo({onClose}: Props) {
  const queryClient = useQueryClient();
  const createNewVehiculo = useMutation({
    mutationFn: createVehiculo,
    onSuccess: () => {
      successToast("Vehiculo creado!");
      queryClient.invalidateQueries({ queryKey: ["vehiculos"] });
      reset()
      onClose()
    },
    onError: () => {
      errorToast('Ha ocurrido un error al crear el vehiculo')
    }
  });

  const { register, handleSubmit, reset, formState:{errors} } = useForm<Vehiculos>({
    resolver: yupResolver(vehiculoSchema)
  });
  const onSubmit: SubmitHandler<Vehiculos> = (data) => {
    createNewVehiculo.mutate(data)
  };

  return {
    errors,
    register,
    onSubmit,
    handleSubmit,
  };
}