import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { updateDespacho } from "../api/resDespachos";
import { Despachos } from "../interface/Despachos";
import { despachoSchema } from "../schemas/despachoSchema";
import { getDateNow } from '../utilities/getDateNow';
import { vehiculoSchema } from "../schemas/vehiculoSchema";
import { updateVehiculo } from "../api/resVehiculos";
import { Vehiculos } from "../interface/Vehiculos";

interface Props {
  onClose: () => void;
}

export default function useFormEditVehiculo({ onClose }: Props) {
  const queryClient = useQueryClient();
  const updateVehiculoMutation = useMutation({
    mutationFn: updateVehiculo,
    onSuccess: () => {
      alert("Vehiculo editado!");
      queryClient.invalidateQueries({ queryKey: ["vehiculos"] });
      onClose();
    },
  });
  const { register, handleSubmit, formState:{errors} } = useForm<Vehiculos>({
    resolver: yupResolver(vehiculoSchema)
  });
  const onSubmit: SubmitHandler<Vehiculos> = (data) => {
    console.log(data)
    updateVehiculoMutation.mutate(data);
    } 
  


  return {
    onSubmit,
    errors,
    register,
    handleSubmit,
  };
}