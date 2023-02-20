import React from "react";
interface Props {
  label: string;
  placeholder: string;
  type: string
}

function InputForDrawer({ label, placeholder, type }: Props) {
  return (
    <div className="col-span-1">
      <label
        htmlFor=""
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        }
      />
    </div>
  );
}

export default InputForDrawer;