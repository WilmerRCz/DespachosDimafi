import React from 'react'

interface Props {
  
}

function ErrorReactQuery () {
  return (
    <div className="h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-slate-700 text-4xl sm:text-5xl font-semibold text-center">Error en la petición</h1>
        <p className="text-slate-700 text-base mt-4 text-center">Lo sentimos, ha ocurrido un error en la llamada al servidor.</p>
      </div>
    </div>
  )
}

export default ErrorReactQuery