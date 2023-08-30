import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const TableManagePayments = ({
  sinceDate = undefined,
  untilDate = undefined,
  operator = undefined,
}) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const headers = [
    "#",
    "Fecha",
    "Hora",
    "Titulo",
    "Forma de Pago",
    "Operador",
    "Observaciones",
    "Monto",
  ];

  useEffect(() => {
    let total = 0;
    let url = `https://politurapp-production.up.railway.app/api/v1/managmentPayments?`;
    if (sinceDate && untilDate) {
      url += `&sinceDate=${sinceDate}&untilDate=${untilDate}`;
    }
    if (operator) url += `&operator=${operator}`;

    axios.get(url).then((res) => {
      setData(res.data);
      res.data.forEach((managmentPayment: any) => {
        if (managmentPayment.paymentFormat == "Credito") {
          total -= managmentPayment.amount;
        } else {
          total += managmentPayment.amount;
        }
      });
      setTotal(total);
    });
  }, [sinceDate, untilDate, operator]);

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
        {data?.map((managmentPayment: any, index: any) => (
          <tr>
            <td style={{ textAlign: "center" }}>{index + 1}</td>
            <td style={{ textAlign: "center" }}>{managmentPayment.date}</td>
            <td style={{ textAlign: "center" }}>{managmentPayment.hour}</td>
            <td style={{ textAlign: "center" }}>{managmentPayment.title}</td>
            <td style={{ textAlign: "center" }}>
              {managmentPayment.paymentFormat}
            </td>
            <td style={{ textAlign: "center" }}>{managmentPayment.operator}</td>
            <td style={{ textAlign: "center" }}>
              {managmentPayment.observations}
            </td>
            <td style={{ textAlign: "center" }}>
              {managmentPayment.paymentFormat === "Credito"
                ? `-${managmentPayment.amount}`
                : `${managmentPayment.amount}`}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td style={{ textAlign: "center" }}>
            <b>Total</b>
          </td>
          <td style={{ textAlign: "center" }}>
            <b>{total}</b>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default TableManagePayments;
