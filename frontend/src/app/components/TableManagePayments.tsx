import axios from "axios";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";

const TableManagePayments = () => {
  const headers = [
    "#",
    "Fecha",
    "Hora",
    "Titulo",
    "Forma de Pago",
    "Observaciones",
    "Monto",
  ];

  useEffect(() => {
    const url = `http://localhost:8000/api/v1/managmentPayments`;
    axios.get(url).then((res) => console.log(res.data));
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} style={{ fontSize: "14px", textAlign: "center" }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ textAlign: "center" }}>1</td>
          <td style={{ textAlign: "center" }}>2023-08-27</td>
          <td style={{ textAlign: "center" }}>10:00</td>
          <td style={{ textAlign: "center" }}>Informe de Credito</td>
          <td style={{ textAlign: "center" }}>Credito</td>
          <td style={{ textAlign: "center" }}>Deposito en efectivo</td>
          <td style={{ textAlign: "center" }}>-50,000</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td style={{ textAlign: "center" }}>Total</td>
          <td style={{ textAlign: "center" }}>-50,000</td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default TableManagePayments;
