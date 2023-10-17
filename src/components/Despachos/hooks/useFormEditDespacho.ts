import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { updateDespacho } from "../../../api/resDespachos";
import { Despachos } from "../../../interface/Despachos";
import { despachoSchema } from "../../../schemas/despachoSchema";
import { getDateNow } from '../../../utilities/getDateNow';
import { errorToast, successToast, warningToast } from '../../../utilities/showToast'
import { verifyRoleInComponent } from '../../../utilities/verifyRoleInComponent'
import { DiccionarioRoles } from '../../../interface/DiccionarioRoles'


interface Props {
  dataDespacho: Despachos;
  onClose: () => void;
}

export default function useFormEditDespacho({ onClose, dataDespacho }: Props) {

  const queryClient = useQueryClient();
  const { Administrador, Coordinador, Despachador, Lector} = DiccionarioRoles

  if (verifyRoleInComponent([Despachador])){

    const updateDespachoMutation = useMutation({
      mutationFn: updateDespacho,
      onSuccess: () => {
        successToast("Despacho editado! Si eres despachador solo puedes modificar el estado del despacho. ");
        queryClient.invalidateQueries({ queryKey: ["despachos"] });
        onClose();
      },
      onError: () => {
        errorToast('Ocurrio un error al editar el despacho')
      }
    });
    const { register, handleSubmit, formState:{errors} } = useForm<Despachos>({
      resolver: yupResolver(despachoSchema)
    });
    const onSubmit: SubmitHandler<Despachos> = (data) => {
  
      if (
        dataDespacho.nombre_estado === "Completado" ||
        dataDespacho.nombre_estado === "Rechazado"
      ) {
        return warningToast('Una vez el despacho este completo o rechazado, este no se puede modificar');
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
      errors,
      register,
      handleSubmit,
    };

  } else {

    const updateDespachoMutation = useMutation({
      mutationFn: updateDespacho,
      onSuccess: () => {
        successToast("Despacho editado!");
        queryClient.invalidateQueries({ queryKey: ["despachos"] });
        onClose();
      },
      onError: () => {
        errorToast('Ocurrio un error al editar el despacho')
      }
    });
    const { register, handleSubmit, formState:{errors} } = useForm<Despachos>({
      resolver: yupResolver(despachoSchema)
    });
    const onSubmit: SubmitHandler<Despachos> = (data) => {
      const { estado_despacho } = data
      if (
        dataDespacho.nombre_estado === "Completado" ||
        dataDespacho.nombre_estado === "Rechazado"
      ) {
        return warningToast('Una vez el despacho este completo o rechazado, este no se puede modificar');
      } else if (data.estado_despacho === 2) {
        updateDespachoMutation.mutate(
          {estado_despacho,
            id_despacho: dataDespacho.id_despacho,
          fechayhora_comienzo_despacho: getDateNow()}
          
        );
      } else if (data.estado_despacho === 3 || data.estado_despacho === 4) {
        updateDespachoMutation.mutate(
          {estado_despacho,
            id_despacho: dataDespacho.id_despacho,
          fechayhora_termino_despacho: getDateNow()}
        );
      } else {
        updateDespachoMutation.mutate(
          {estado_despacho,
          id_despacho: dataDespacho.id_despacho}
        );
      } 
    };

    return {
      onSubmit,
      errors,
      register,
      handleSubmit,
    };
  }
}
