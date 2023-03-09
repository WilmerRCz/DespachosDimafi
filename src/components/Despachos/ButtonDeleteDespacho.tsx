import { FiTrash2 } from "react-icons/fi";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateDespacho } from "../../api/resDespachos";
import { Despachos } from "../../interface/Despachos";
import { findIndexInTable } from "../../utilities/findIndexInTable";

function ButtonDeleteDespacho(record: any) {
  const dataDespacho: Despachos = findIndexInTable(record);
  const queryClient = useQueryClient();
  const updateDespachoMutation = useMutation({
    mutationFn: updateDespacho,
    onSuccess: () => {
      alert("Despacho eliminado!");
      queryClient.invalidateQueries({ queryKey: ["despachos"] }); 
    },
  });

  const handleDeleteDespacho = () => {
    updateDespachoMutation.mutate({
      id_despacho: dataDespacho.id_despacho,
      estado_actividad: 2,
    });
  };

  return (
    <div>
      <button onClick={handleDeleteDespacho}>
        <FiTrash2 size={19} color={"red"} />
      </button>
    </div>
  );
}

export default ButtonDeleteDespacho;
