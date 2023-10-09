import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { updateVehiculo } from "../../../api/resVehiculos";
import { Vehiculos } from "../../../interface/Vehiculos";
import { errorToast, successToast } from '../../../utilities/showToast'

interface Props {
  onClose: () => void;
  dataVehiculo: Vehiculos
}

export default function useFormEditVehiculo({ onClose, dataVehiculo }: Props) {
  const queryClient = useQueryClient();
  const updateVehiculoMutation = useMutation({
    mutationFn: updateVehiculo,
    onSuccess: () => {
      successToast("Vehiculo editado!");
      queryClient.invalidateQueries({ queryKey: ["vehiculos"] });
      queryClient.invalidateQueries({ queryKey: ["VehiculosActivos"] });
      onClose();
    },
    onError: () => {
      errorToast('Ha ocurrido un error al editar el vehiculo')
    }
  });
  
  const { register, handleSubmit } = useForm<Vehiculos>();
  const onSubmit: SubmitHandler<Vehiculos> = (data) => {
    // console.log(data)
    updateVehiculoMutation.mutate({
      ...data,
      patente: dataVehiculo.patente
    });
    } 

  return {
    register,
    onSubmit,
    handleSubmit,
  };
}