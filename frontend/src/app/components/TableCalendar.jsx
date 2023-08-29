"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function TableCalendar({ data }) {
  const headers = [
    "Actividad",
    "Tickets Vendidos",
    "Tickets Disponibles",
    "Hora",
    "Fecha",
  ];

  const [finalData, setFinalData] = useState();

  useEffect(() => {
    if (data) {
      data.forEach((activityScheduledInfo) => {
        axios
          .get(
            `https://politurapp-production.up.railway.app/api/v1/activities/${activityScheduledInfo.activityId}`
          )
          .then((res) => {
            activityScheduledInfo.activityFullData = res.data;
          })
          .catch((error) => console.log(error));
      });
    }
    setTimeout(() => {
      setFinalData(data);
    }, 100);
  }, [data]);

  if (!data) return null;

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
        {finalData?.map((activityInfo, index) => (
          <tr>
            <td style={{ textAlign: "center" }}>
              {activityInfo?.activityFullData?.[0]?.name}
            </td>
            <td style={{ textAlign: "center" }}>
              {activityInfo?.activityFullData?.[0]?.tiketsPerDay -
                activityInfo?.stock}
            </td>
            <td style={{ textAlign: "center" }}>{activityInfo?.stock}</td>
            <td style={{ textAlign: "center" }}>{activityInfo?.hour}</td>
            <td style={{ textAlign: "center" }}>{activityInfo?.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableCalendar;
