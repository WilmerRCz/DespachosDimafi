import React, { useEffect } from 'react'
import { getSucursales } from '../api/resSucursales';

function SucursalesTable() {
  useEffect(() => {
    getSucursales()
  }, []);

  return (
    <div>SucursalesTable</div>
  )
}

export default SucursalesTable