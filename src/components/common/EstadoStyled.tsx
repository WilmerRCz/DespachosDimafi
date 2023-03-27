import React from 'react'

interface Props {
estado: string
}

interface Style {
  [key: string]: string;
}


function EstadoStyled({estado}:Props) {
  const style: Style ={
    "Espera": "bg-blue-200 text-blue-800 rounded-lg text-xs font-medium p-1.5",
    "Pendiente": "bg-yellow-200 text-yellow-800 rounded-lg text-xs font-medium p-1.5",
    "Completado": "bg-green-200 text-green-800 rounded-lg text-xs font-medium p-1.5",
    "Rechazado": "bg-red-200 text-red-800 rounded-lg text-xs font-medium p-1.5"
  }
  return (
      <span className={`${style[estado] ? style[estado]: ''}`}>{estado}</span>
  )
}

export default EstadoStyled