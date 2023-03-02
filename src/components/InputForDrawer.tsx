import React from "react";
interface Props {
  label: string;
  placeholder?: string;
  type: string;
  optional?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  defaultValue?: string | number;
}

function InputForDrawer({ label, placeholder, name, id, type, optional, defaultValue, required }: Props) {
  return (
    <div className="col-span-1">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {required ? <span className="text-red-500">*</span> : null}{label}{optional ? <span className="text-xs text-slate-400">(optional)</span>: null}
      </label>
      <input
        type={type}
        id={id}
        defaultValue={defaultValue}
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
