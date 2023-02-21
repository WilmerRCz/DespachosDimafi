import React from "react";
interface Props {
  label: string;
  placeholder?: string;
}

function TextAreaForDrawer({ label, placeholder}: Props) {
  return (
    <div className="col-span-2">
      <label
        htmlFor="comentario"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <textarea
        id="comentario"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default TextAreaForDrawer;
