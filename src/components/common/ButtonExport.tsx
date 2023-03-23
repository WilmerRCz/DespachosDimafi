import { RiFileExcel2Fill } from "react-icons/ri";

function ButtonExport() {
  return (
    <div className="">
      <button className="bg-amber-500 rounded flex items-center text-slate-700 font-semibold p-0.5 border-2 border-amber-600 hover:text-white shadow-md">
        <RiFileExcel2Fill />
        Exportar
      </button>
    </div>
  );
}

export default ButtonExport;
