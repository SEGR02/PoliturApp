import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import pencil from "@/assets/🦆 icon _pencil_.svg";
import ModalEditScheduleActivity from "./ModalEditScheduleActivity";

const TableManageScheduledActivities = () => {
  const headers = ["#", "Fecha", "Hora", "Actividad", "Stock"];
  const [data, setData] = React.useState([]);
  const [showModal, setShowModal] = React.useState<any>(false);
  const [sellerSelected, setSellerSelected] = React.useState<any>(false);
  const [deleteButton, setDeleteButton] = React.useState<any>(false);

  useEffect(() => {
    axios
      .get("https://politurapp-production.up.railway.app/api/v1/stock")
      .then((res) => {
        console.log(res.data);
        res.data.forEach((stockManagment: any) => {
          axios
            .get(
              `https://politurapp-production.up.railway.app/api/v1/activities/${stockManagment.activityId}`
            )
            .then((res) => {
              stockManagment.activityName = res.data?.[0].name;
            });
        });
        setTimeout(() => setData(res.data), 50);
      });
  }, [showModal]);

  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th style={{ fontSize: "14px", textAlign: "center" }}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((seller: any, index) => (
          <tr style={deleteButton ? { display: "none" } : {}} key={index + 1}>
            <td style={{ textAlign: "center" }}>{index + 1}</td>
            <td style={{ textAlign: "center" }}>{seller.date}</td>
            <td style={{ textAlign: "center" }}>{seller.hour}</td>
            <td style={{ textAlign: "center" }}>{seller.activityName}</td>
            <td style={{ textAlign: "center" }}>{seller.stock}</td>
            <td>
              <Image
                onClick={() => {
                  setShowModal(!showModal);
                  setSellerSelected(seller);
                }}
                style={{ cursor: "pointer" }}
                src={pencil}
                alt=""
              />
            </td>
          </tr>
        ))}
        {showModal && (
          <ModalEditScheduleActivity
            isShow={showModal}
            seller={sellerSelected}
          />
        )}
      </tbody>
    </Table>
  );
};

export default TableManageScheduledActivities;
