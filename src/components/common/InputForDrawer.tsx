import React from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
interface Props {
  label: string;
  placeholder?: string;
  type: string;
  optional?: boolean;
  required?: boolean;
  setNumber?: boolean;
  name: string;
  defaultValue?: string | number;
  register: UseFormRegister<FieldValues>;
  errorMessage?: string
}

function InputForDrawer({
  label,
  placeholder,
  name,
  setNumber,
  type,
  optional,
  defaultValue,
  required,
  register,
  errorMessage
}: Props) {
  return (
    <div className="col-span-1">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {required ? <span className="text-red-500">*</span> : null}
        {label}
        {optional ? (
          <span className="text-xs text-slate-400">(optional)</span>
        ) : null}
      </label>
      <input
        {...register(name, { valueAsNumber: setNumber })}
        type={type}
        id={name}
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        }
      />
      {errorMessage && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
}

export default InputForDrawer;
