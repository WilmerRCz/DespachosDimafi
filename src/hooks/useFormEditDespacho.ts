import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { updateDespacho } from "../api/resDespachos";
import { Despachos } from "../interface/Despachos";
import { getDateNow } from '../utilities/getDateNow';

interface Props {
  dataDespacho: Despachos;
  onClose: () => void;
}

export default function useFormEditDespacho({ onClose, dataDespacho }: Props) {
  const queryClient = useQueryClient();
  const updateDespachoMutation = useMutation({
    mutationFn: updateDespacho,
    onSuccess: () => {
      alert("Despacho editado!");
      queryClient.invalidateQueries({ queryKey: ["despachos"] });
      
      onClose();
      
    },
  });
  const { register, handleSubmit } = useForm<Despachos>();
  const onSubmit: SubmitHandler<Despachos> = (data) => {
     if (
      dataDespacho.nombre_estado === "Completado" ||
      dataDespacho.nombre_estado === "Rechazado"
    ) {
      return alert('Una vez el despacho este completo o rechazado, este no se puede modificar');
    } else if (data.estado_despacho === 2) {
      updateDespachoMutation.mutate(
        {...data,
          id_despacho: dataDespacho.id_despacho,
        fechayhora_comienzo_despacho: getDateNow()}
      );
    } else if (data.estado_despacho === 3 || data.estado_despacho === 4) {
      updateDespachoMutation.mutate(
        {...data,
          id_despacho: dataDespacho.id_despacho,
        fechayhora_termino_despacho: getDateNow()}
      );
    } else {
      updateDespachoMutation.mutate(
        {...data,
        id_despacho: dataDespacho.id_despacho}
      );
    } 
  };


  return {
    onSubmit,
    register,
    handleSubmit,
  };
}
