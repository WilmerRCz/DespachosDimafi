import React from 'react'
import { RiArrowDropLeftLine } from "react-icons/ri";
import { GiBeastEye } from "react-icons/gi";
import { useState } from 'react';

function Sidebar() {
  const [open, setOpen] = useState(true)
  return (
    <div className='flex'>
      <div className={`${open ? "w-64" : "w-16"} duration-300 h-screen bg-red-400 relative`}>
        <RiArrowDropLeftLine size={28} className={`absolute cursor-pointer -right-3 rounded-full
         top-9 w-7 border-2 bg-red-400 ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)}/>
         <div className='flex gap-x-4 items-center'>
          <GiBeastEye size={28} className={`cursor-pointer duration-500 `}/>
          <h1 className='text-white origin-left font-medium text-xl duration-300'>Despachos</h1>
         </div>
      </div>
    </div>
  )
}

export default Sidebar