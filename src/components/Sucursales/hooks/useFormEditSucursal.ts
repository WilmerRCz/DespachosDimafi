import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Sucursales } from "../../../interface/Sucursales";
import { updateSucursal } from "../../../api/resSucursales";
import { sucursalSchema } from "../../../schemas/sucursalSchema";
import { errorToast, successToast } from '../../../utilities/showToast'

interface Props {
  onClose: () => void;
  dataSucursal: Sucursales
}

export default function useFormEditSucursal({ onClose, dataSucursal }: Props) {
  const queryClient = useQueryClient();
  const updateSucursalMutation = useMutation({
    mutationFn: updateSucursal,
    onSuccess: () => {
      successToast("Sucursal editada!");
      queryClient.invalidateQueries({ queryKey: ["sucursales"] });
      onClose();
    },
    onError: () => {
      errorToast('Ha ocurrido un error al editar la sucursal')
    }
  });
  const { register, handleSubmit, formState:{errors} } = useForm<Sucursales>({
    resolver: yupResolver(sucursalSchema)
  });
  const onSubmit: SubmitHandler<Sucursales> = (data) => {
    // console.log(data)
    updateSucursalMutation.mutate({
      ...data,
      id_sucursal: dataSucursal.id_sucursal
    });

    } 

  return {
    onSubmit,
    errors,
    register,
    handleSubmit,
  };
}