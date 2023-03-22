import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { updateDespacho } from "../api/resDespachos";
import { Despachos } from "../interface/Despachos";

interface Props {
  onClose: () => void;
}

export default function useFormEditDespacho({ onClose }: Props) {
  const queryClient = useQueryClient();
  const updateDespachoMutation = useMutation({
    mutationFn: updateDespacho,
    onSuccess: () => {
      onClose();
      queryClient.invalidateQueries({ queryKey: ["despachos"] });
      alert("Despacho editado!");
    },
  });
  const { register, handleSubmit } = useForm<Despachos>();
  const onSubmit: SubmitHandler<Despachos> = (data) => {
    console.log(data);
  };

  return {
    onSubmit,
    register,
    handleSubmit,
  };
}
