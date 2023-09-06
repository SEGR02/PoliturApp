import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import trash from "@/assets/🦆 icon _trash_.svg";
import pencil from "@/assets/🦆 icon _pencil_.svg";
import ModalEditActivity from "./ModalEditActivity";

const TableManageActivities = () => {
  const headers = ["#", "Nombre", "Valor", "Cantidad Max"];
  const [data, setData] = React.useState([]);
  const [showModal, setShowModal] = React.useState<any>(false);
  const [activitySelected, setActivitySelected] = React.useState<any>(false);
  const [deleteButton, setDeleteButton] = React.useState<any>(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/activities").then((res) => {
      setData(res.data);
    });
  }, [showModal]);

  const deleteSeller = (id: any) => {
    axios
      .delete(`http://localhost:8000/api/v1/activities/${id}`)
      .then((res) => alert("Actividad eliminada " + res.status));
  };

  console.log(data);

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
            <td style={{ textAlign: "center" }}>{seller.name}</td>
            <td style={{ textAlign: "center" }}>{seller.ticketValue}</td>
            <td style={{ textAlign: "center" }}>{seller.tiketsPerDay}</td>
            <td>
              <Image
                onClick={() => {
                  setShowModal(!showModal);
                  setActivitySelected(seller);
                }}
                style={{ cursor: "pointer" }}
                src={pencil}
                alt=""
              />
              <Image
                style={{ marginLeft: "10px", cursor: "pointer" }}
                src={trash}
                alt=""
                onClick={() => {
                  deleteSeller(seller.id);
                  setDeleteButton(!deleteButton);
                }}
              />
            </td>
          </tr>
        ))}
        {showModal && (
          <ModalEditActivity isShow={showModal} activity={activitySelected} />
        )}
      </tbody>
    </Table>
  );
};

export default TableManageActivities;
