import React from 'react'
import { FaSpinner } from "react-icons/fa";

interface Props {
  size: number
}

function SpinnerLoading({size}: Props) {
  return (
    <div className="text-black absolute inset-0 flex flex-col justify-center items-center">
    <FaSpinner
    size={size}
      style={{
        transform: "rotate(0deg)",
        animation: "spin 1s linear infinite",
      }}
    />
  </div>
  )
}

export default SpinnerLoading