import { FiTrash2 } from "react-icons/fi";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateDespacho } from "../../api/resDespachos";
import { Despachos } from "../../interface/Despachos";
import { findIndexInTable } from "../../utilities/findIndexInTable";

interface Props {
  nro_record: any,
  data: any
  sizeButton: number
}
function ButtonDeleteDespacho({nro_record, data, sizeButton}:Props) {
  const dataDespacho: Despachos = findIndexInTable(nro_record, data);
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
        <FiTrash2 size={sizeButton} color={"red"} />
      </button>
    </div>
  );
}

export default ButtonDeleteDespacho;
