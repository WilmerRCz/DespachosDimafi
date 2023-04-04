import React from 'react'

interface Props {
  estado: string
  }
  
  interface Style {
    [key: string]: string;
  }

function InactiveStyle({estado}:Props) {
  const style: Style ={
    "Activo": "bg-green-200 text-green-800 rounded-lg text-xs font-medium p-1.5",
    "Inactivo": "bg-red-200 text-red-800 rounded-lg text-xs font-medium p-1.5",
  }
  return (
      <span className={`${style[estado] ? style[estado]: ''}`}>{estado}</span>
  )
}

export default InactiveStyle