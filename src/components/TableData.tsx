import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { indicatorData } from '../interfaces/indicatorData';


function createData(
  codigo: string,
  fecha: string,
  nombre: string,
  unidadMedida: string,
  valor: number,
) {
  return { codigo, fecha, nombre, unidadMedida, valor };
}




export const TableData = (props: indicatorData) => {
  
    const rows = [
      createData(props.data.codigo, props.data.fecha, props.data.nombre, props.data.unidadMedida, props.data.valor),
      
    ];
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          
          <TableRow>
            <TableCell>Codigo</TableCell>
            <TableCell align="center">Fecha</TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Unidad de Medida</TableCell>
            <TableCell align="center">Valor</TableCell>
          </TableRow> 
          
          
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.codigo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.codigo}
              </TableCell>
              <TableCell align="center">{row.fecha}</TableCell>
              <TableCell align="center">{row.nombre}</TableCell>
              <TableCell align="center">{row.unidadMedida}</TableCell>
              <TableCell align="center">{row.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}