import React from "react";

interface Props {
  value?: string | number
  isEdit?: boolean
}

function SelectEstadoDespacho({value, isEdit}:Props) {
  return (
    <div className="col-span-1">
      <label
        htmlFor="estado_despacho"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Estado del despacho
      </label>
        <select
          name="estado_despacho"
          id="estado_despacho"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        >
          <option value="1">Espera</option>
          <option value="2">Pendiente</option>
          <option value="3">Completado</option>
          <option value="4">Rechazado</option>
        </select>
    </div>
  );
}

export default SelectEstadoDespacho;
