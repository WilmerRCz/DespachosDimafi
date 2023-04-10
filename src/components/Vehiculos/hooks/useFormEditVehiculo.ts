import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { vehiculoSchema } from "../../../schemas/vehiculoSchema";
import { updateVehiculo } from "../../../api/resVehiculos";
import { Vehiculos } from "../../../interface/Vehiculos";

interface Props {
  onClose: () => void;
  dataVehiculo: Vehiculos
}

export default function useFormEditVehiculo({ onClose, dataVehiculo }: Props) {
  const queryClient = useQueryClient();
  const updateVehiculoMutation = useMutation({
    mutationFn: updateVehiculo,
    onSuccess: () => {
      alert("Vehiculo editado!");
      queryClient.invalidateQueries({ queryKey: ["vehiculos"] });
      queryClient.invalidateQueries({ queryKey: ["VehiculosActivos"] });
      onClose();
    },
  });
  const { register, handleSubmit } = useForm<Vehiculos>();
  const onSubmit: SubmitHandler<Vehiculos> = (data) => {
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