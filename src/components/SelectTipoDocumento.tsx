import React from "react";

function SelectTipoDocumento() {
  return (
    <div className="col-span-1">
      <label
        htmlFor="nro_documento"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Tipo de documento
      </label>
      <div className="block w-full">
        <select
          name="tipo_documento"
          id="tipo_documento"
          className="bg-gray-50 border border-gray-300 w-full sm:w-2/6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-1"
        >
          <option value="1">
            Factura
          </option>
          <option value="2">Guia de despacho</option>
          <option value="3">Boleta</option>
        </select>
        <input
          id="nro_documento"
          name="nro_documento"
          type="text"
          placeholder="435672"
          className={
            "bg-gray-50 border border-gray-300 w-full sm:w-2/3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1"
          }
        />
      </div>
    </div>
  );
}

export default SelectTipoDocumento;
