import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { createDespacho } from "../api/resDespachos";
import { Despachos } from "../interface/Despachos";

interface Props {
  onClose: () => void
}

export default function useFormNewDespacho({onClose}: Props) {
  
  const queryClient = useQueryClient();
  const createNewDespacho = useMutation({
    mutationFn: createDespacho,
    onSuccess: () => {
      console.log("Despacho creado!");
      queryClient.invalidateQueries({ queryKey: ["despachos"] });
      reset()
      onClose()
    },
  });
  const { register, handleSubmit, reset } = useForm<Despachos>();
  const onSubmit: SubmitHandler<Despachos> = (data) => {
    createNewDespacho.mutate(data)
  };

  return {
    onSubmit,
    register,
    handleSubmit,
  };
}
