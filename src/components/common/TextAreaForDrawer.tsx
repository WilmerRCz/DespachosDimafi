import React from "react";
import { UseFormRegister, FieldValues } from 'react-hook-form';
interface Props {
  label: string;
  placeholder?: string;
  optional?: string;
  colspan: string;
  name: string
  value?: string;
  register: UseFormRegister<FieldValues>
  errorMessage?: string
}

function TextAreaForDrawer({ label, placeholder, name, optional, colspan, value, register, errorMessage}: Props) {
  return (
    <div className={colspan}>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}<span className="text-xs text-slate-400"> {optional}</span>
      </label>
      <textarea
        {...register(name)}
        id={name}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        defaultValue={value}
        placeholder={placeholder}
      ></textarea>
      {errorMessage && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
}

export default TextAreaForDrawer;
