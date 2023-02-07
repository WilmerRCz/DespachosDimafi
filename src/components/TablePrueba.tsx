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
import Paper from "@mui/material/Paper";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { getDespachos } from "../api/resDespachos";
import { useQuery } from "@tanstack/react-query";
import { Despachos } from "../interface/Despachos";

function TablePrueba() {
  const [open, setOpen] = React.useState(false);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["despachos"],
    queryFn: getDespachos,
  });

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: desde react query</div>;

  function Row() {
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Creación</TableCell>
                      <TableCell>Modificación</TableCell>
                      <TableCell align="right">Inicio</TableCell>
                      <TableCell align="right">Termino</TableCell>
                      <TableCell align="right">Termino</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((despacho: Despachos) => (
                      <TableRow key={despacho.id_despacho}>
                        <TableCell component="th" scope="row">
                          {despacho.fecha_creacion_despacho}
                        </TableCell>
                        <TableCell>
                          {despacho.fecha_modificacion_despacho}
                        </TableCell>
                        <TableCell align="right">
                          {despacho.fechayhora_comienzo_despacho}
                        </TableCell>
                        <TableCell align="right">
                          {`${despacho.codigo_celular} ${despacho.celular_cliente}`}
                        </TableCell>
                        <TableCell align="right">
                          {despacho.fechayhora_termino_despacho}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
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
          {data.map((despacho: Despachos) => (
            <TableRow key={despacho.id_despacho}>
              <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                  >
                    {open ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableCell component="th" scope="row">
                {despacho.id_despacho}
              </TableCell>
              <TableCell>{despacho.nombre_cliente}</TableCell>
              <TableCell>{despacho.rut_cliente_despacho}</TableCell>
              <TableCell>
                {`${despacho.direccion_calle_cliente}, ${despacho.nro_calle_cliente} - ${despacho.nombre_comuna}`}
              </TableCell>
              <TableCell>
                {`${despacho.nombre_documento} - ${despacho.nro_documento}`}
              </TableCell>
              <TableCell>{despacho.nro_oc}</TableCell>
              <TableCell>{despacho.usuario_despachador}</TableCell>
              <TableCell>{despacho.patente}</TableCell>
              <TableCell>{despacho.nombre_sucursal}</TableCell>
              <TableCell>{despacho.nombre_estado}</TableCell>
              <TableCell>{`$${despacho.monto_venta}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablePrueba;
