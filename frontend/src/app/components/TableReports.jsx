"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const TableReports = ({ customDate, sellerId = undefined }) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const finalDate = `${year}-${month < 10 ? `0${month}` : month}-${day}`;
  const [data, setData] = useState(false);
  const [totalCardd, setTotalCard] = useState(0);
  const [totalTransferr, setTotalTransfer] = useState(0);
  const [totalCashClpp, setTotalCashClp] = useState(0);
  const [totalCashUsdd, setTotalCashUsd] = useState(0);

  const headers = [
    "#",
    "Fecha de Pago",
    "Tipo de Pago",
    "Moneda",
    "Cantidad",
    "Vendedor",
  ];

  useEffect(() => {
    let totalCard = 0;
    let totalTransfer = 0;
    let totalCashClp = 0;
    let totalCashUsd = 0;
    const aux = [];
    let url = `http://localhost:8000/api/v1/orders/?`;

    if (finalDate) url += `&buyDate=${customDate ? customDate : finalDate}`;
    if (sellerId) url += `&sellerId=${sellerId}`;

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
                    paymentType: payment.paymentType,
                    currency: payment.currency,
                    total: payment.total,
                    seller: res2.data?.fullname,
                  });
                  if (payment.paymentType === "Tarjeta") {
                    totalCard += payment.total;
                  } else if (payment.paymentType === "Transferencia") {
                    totalTransfer += payment.total;
                  } else if (
                    payment.paymentType === "Efectivo" &&
                    payment.currency === "CLP"
                  ) {
                    totalCashClp += payment.total;
                  } else if (
                    payment.paymentType === "Efectivo" &&
                    payment.currency === "USD"
                  ) {
                    totalCashUsd += payment.total;
                  }
                });
                setTotalCard(totalCard);
                setTotalTransfer(totalTransfer);
                setTotalCashClp(totalCashClp);
                setTotalCashUsd(totalCashUsd);
              });
          });
      });
    });
    setTimeout(() => setData(aux), 65);
  }, [customDate]);

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
              <td style={{ fontSize: "14px", textAlign: "center" }}>
                {index + 1}
              </td>
              <td style={{ fontSize: "14px", textAlign: "center" }}>
                {activitySell.buyDate}
              </td>
              <td style={{ fontSize: "14px", textAlign: "center" }}>
                {activitySell.paymentType}
              </td>
              <td style={{ fontSize: "14px", textAlign: "center" }}>
                {String(data[0]?.total).length > 3 ? "CLP" : "USD"}
              </td>
              <td style={{ fontSize: "14px", textAlign: "center" }}>
                {activitySell.total}
              </td>
              <td style={{ fontSize: "14px", textAlign: "center" }}>
                {activitySell.seller}
              </td>
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td style={{ fontSize: "14px", textAlign: "center" }}>
            <b>Total Tarjeta: </b>
          </td>
          <td style={{ fontSize: "14px", textAlign: "center" }}>
            <b>{totalCardd}</b>
          </td>
          <td style={{ fontSize: "14px", textAlign: "center" }}>
            <b>Total Efectivo CLP: </b>
          </td>
          <td style={{ fontSize: "14px", textAlign: "center" }}>
            <b>{totalCashClpp}</b>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td style={{ fontSize: "14px", textAlign: "center" }}>
            <b>Total Transferencia: </b>
          </td>
          <td style={{ fontSize: "14px", textAlign: "center" }}>
            <b>{totalTransferr}</b>
          </td>
          <td style={{ fontSize: "14px", textAlign: "center" }}>
            <b>Total Efectivo USD: </b>
          </td>
          <td style={{ fontSize: "14px", textAlign: "center" }}>
            <b>{totalCashUsdd}</b>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default TableReports;
