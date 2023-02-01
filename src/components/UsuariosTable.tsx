import React, { useEffect } from "react";
import { getUsuarios } from "../api/resUsuarios";

function UsuariosTable() {
  useEffect(() => {
    getUsuarios();
  }, []);
  return <div>UsuariosTable</div>;
}

export default UsuariosTable;
