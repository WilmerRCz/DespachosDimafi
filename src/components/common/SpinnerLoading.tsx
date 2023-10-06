import React from 'react'
import { FaSpinner } from "react-icons/fa";

interface Props {
  size: number
  isSelect?: boolean;
}

function SpinnerLoading({size, isSelect}: Props) {

  if (isSelect) {
    return(
      <div className='col-span-1'>
        <div className="text-black flex justify-center items-center">
          <FaSpinner
          size={size}
            style={{
              transform: "rotate(0deg)",
              animation: "spin 1s linear infinite",
            }}
          />
        </div>
      </div>
    )
  } else {
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
}

export default SpinnerLoading