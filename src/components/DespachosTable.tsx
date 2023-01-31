import React, { useEffect } from "react";
import { getDespachos } from "../api/resDespachos";

function DespachosTable() {
  useEffect(() => {
    getDespachos()
  }, []);

  return (<div>DespachosTable</div>);
}

export default DespachosTable;
