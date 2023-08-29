"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const TableCreditsReports = ({
  sinceDate,
  untilDate,
  operator = undefined,
}) => {
  const [data, setData] = useState(false);
  const [total, setTotal] = useState(false);

  const headers = ["#", "Fecha de Factura", "Cantidad", "Operador", "Vendedor"];

  useEffect(() => {
    let totalAux = 0;
    const aux = [];
    let url = `http://localhost:8000/api/v1/orders/?is_credit=true`;

    if (sinceDate) url += `&sinceDate=${sinceDate}`;
    if (untilDate) url += `&untilDate=${untilDate}`;
    if (operator) url += `&operator=${operator}`;

    console.log(url);

    axios.get(url).then((res) => {
      res.data.forEach((order) => {
        axios
          .get(`http://localhost:8000/api/v1/users/${order.sellerId}`)
          .then((res2) => {
            axios
              .get(`http://localhost:8000/api/v1/payments?orderId=${order?.id}`)
              .then((ans) => {
                ans.data.forEach((payment) => {
                  aux.push({
                    buyDate: order.buyDate,
                    total: payment.total,
                    operator: order.operator,
                    seller: res2.data?.fullname,
                  });
                  totalAux += payment.total;
                });
                setTotal(totalAux);
              });
          });
      });
    });
    setTimeout(() => setData(aux), 60);
  }, [sinceDate, untilDate]);

  return (
    <Table size="sm" responsive>
      <thead>
        <tr>
          {headers.map((header) => (
            <th style={{ fontSize: "14px", textAlign: "center" }}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.map((activitySell, index) => (
            <tr>
              <td style={{ textAlign: "center" }}>{index + 1}</td>
              <td style={{ textAlign: "center" }}>{activitySell.buyDate}</td>
              <td style={{ textAlign: "center" }}>{activitySell.total}</td>
              <td style={{ textAlign: "center" }}>{activitySell.operator}</td>
              <td style={{ textAlign: "center" }}>{activitySell.seller}</td>
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td style={{ fontSize: "14px", textAlign: "center" }}>
            <b>Total: </b>
          </td>
          <td style={{ fontSize: "14px", textAlign: "center" }}>
            <b>{total}</b>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default TableCreditsReports;
