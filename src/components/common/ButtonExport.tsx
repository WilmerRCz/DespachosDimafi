import { RiFileExcel2Fill } from "react-icons/ri";
import { errorToast } from '../../utilities/showToast'

interface Props {
  onClick: Promise<any>
  nameFile: string
}

function ButtonExport({onClick, nameFile}: Props) {
  const handleExport = async () => {
    try {
      const fileData = await onClick;
      const blob = new Blob([fileData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `${nameFile}.xlsx`;
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      errorToast('Error al descargar el archivo');
    }
  };
  return (
    <div className="">
      <button onClick={handleExport} className="bg-amber-500 mr-4 sm:mr-0 rounded flex items-center text-slate-700 font-semibold p-0.5 border-2 border-amber-600 hover:text-white shadow-md">
        <RiFileExcel2Fill />
        Exportar
      </button>
    </div>
  );
}

export default ButtonExport;
