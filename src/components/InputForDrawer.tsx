import React from "react";
interface Props {
  label: string;
  placeholder?: string;
  type: string;
  optional?: string;
  required?: boolean;
  name?: string;
  id?: string;
}

function InputForDrawer({ label, placeholder, name, id, type, optional, required }: Props) {
  return (
    <div className="col-span-1">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {required ? <span className="text-red-500">*</span> : null}{label}<span className="text-xs text-slate-400"> {optional}</span>
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        }
      />
    </div>
  );
}

export default InputForDrawer;
