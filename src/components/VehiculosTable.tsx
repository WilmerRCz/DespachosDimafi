import React, { useEffect } from "react";
import { getVehiculos } from "../api/resVehiculos";

function VehiculosTable() {
  useEffect(() => {
    getVehiculos();
  }, []);
  return <div>VehiculosTable</div>;
}

export default VehiculosTable;
