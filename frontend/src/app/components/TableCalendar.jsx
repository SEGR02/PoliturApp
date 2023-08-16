"use client";
import Table from "react-bootstrap/Table";

function TableCalendar() {
  const headers = [
    "Actividad",
    "Tickets Vendidos",
    "Tickets Disponibles",
    "Turnos",
    "Hora",
    "Fecha",
  ];

  return (
    <Table responsive>
      <thead>
        <tr>
          {headers.map((header) => (
            <th style={{ fontSize: "14px", textAlign: "center" }}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Array.from({ length: 6 }).map((_, index) => (
            <td style={{ textAlign: "center" }} key={index}>
              Table cell {index}
            </td>
          ))}
        </tr>
        <tr>
          {Array.from({ length: 6 }).map((_, index) => (
            <td style={{ textAlign: "center" }} key={index}>
              Table cell {index}
            </td>
          ))}
        </tr>
        <tr>
          {Array.from({ length: 6 }).map((_, index) => (
            <td style={{ textAlign: "center" }} key={index}>
              Table cell {index}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default TableCalendar;
