import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Paper from "@mui/material/Paper";
import { SxProps } from "@mui/material";
import { Despachos } from "../interface/Despachos";
import { useQuery } from "@tanstack/react-query";
import { getDespachos } from "../api/resDespachos";
import { useState } from 'react';

function TablePrueba() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["despachos"],
    queryFn: getDespachos,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;
  const [open, setOpen] = useState<Number[]>([])
  const handleClick = (clickIndex:Number) => {
    if(open.includes(clickIndex)){
      const openCopy = open.filter((element) => {return element !== clickIndex})
      setOpen(openCopy)
    }else {
      const openCopy = [...open]
      openCopy.push(clickIndex)
      setOpen(openCopy)
    }
  }
  const tableContainerSx: SxProps = {
    with: "max-content",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 4,
    borderRadius: 2,
  };
  return (
    <TableContainer component={Paper} sx={tableContainerSx}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "rgba(211,211,211,.2)" }}>
            <TableCell></TableCell>
            <TableCell>Nro</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Rut</TableCell>
            <TableCell>Dirección</TableCell>
            <TableCell>Documento</TableCell>
            <TableCell>OC</TableCell>
            <TableCell>Despachador</TableCell>
            <TableCell>Patente</TableCell>
            <TableCell>Sucursal</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((despacho: Despachos, index: Number) => (
            <React.Fragment key={despacho.id_despacho}>
              <TableRow>
                <TableCell>
                  <IconButton onClick={() => handleClick(index)}>
                    {open.includes(index) ? (
                       <RiArrowDropUpLine/>
                    ) : (
                      <RiArrowDropDownLine/>
                    )}
                  
                  </IconButton>
                </TableCell>
                <TableCell>{despacho.id_despacho}</TableCell>
                <TableCell>{despacho.nombre_cliente}</TableCell>
                <TableCell>{despacho.rut_cliente_despacho}</TableCell>
                <TableCell>{`${despacho.direccion_calle_cliente}, ${despacho.nro_calle_cliente} - ${despacho.nombre_comuna}`}</TableCell>
                <TableCell>{`${despacho.nombre_documento} - ${despacho.nro_documento}`}</TableCell>
                <TableCell>{despacho.nro_oc}</TableCell>
                <TableCell>{despacho.usuario_despachador}</TableCell>
                <TableCell>{despacho.patente}</TableCell>
                <TableCell>{despacho.nombre_sucursal}</TableCell>
                <TableCell>{despacho.nombre_estado}</TableCell>
                <TableCell>{`$${despacho.monto_venta}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={9} sx={{paddingBottom: 0, paddingTop: 0, border: "0px"}}>
                  <Collapse in={open.includes(index)} timeout="auto" unmountOnExit>
                  <Box>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Creación</TableCell>
                          <TableCell>Modificación</TableCell>
                          <TableCell>Inicio</TableCell>
                          <TableCell>Termino</TableCell>
                          <TableCell>Celular</TableCell>
                          <TableCell>Comentario</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>{despacho.fecha_creacion_despacho}</TableCell>
                          <TableCell>{despacho.fecha_modificacion_despacho}</TableCell>
                          <TableCell>{despacho.fechayhora_comienzo_despacho}</TableCell>
                          <TableCell>{despacho.fechayhora_termino_despacho}</TableCell>
                          <TableCell>{`${despacho.codigo_celular} ${despacho.celular_cliente}`}</TableCell>
                          <TableCell>{despacho.comentario_despacho}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablePrueba;
