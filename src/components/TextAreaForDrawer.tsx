import React from "react";
interface Props {
  label: string;
  placeholder?: string;
  optional?: string;
  colspan: string;
  value?: string;
}

function TextAreaForDrawer({ label, placeholder, optional, colspan, value}: Props) {
  return (
    <div className={colspan}>
      <label
        htmlFor="comentario"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}<span className="text-xs text-slate-400"> {optional}</span>
      </label>
      <textarea
        id="comentario"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        defaultValue={value}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default TextAreaForDrawer;
