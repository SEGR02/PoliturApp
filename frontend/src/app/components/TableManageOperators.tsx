import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import trash from "@/assets/🦆 icon _trash_.svg";
import pencil from "@/assets/🦆 icon _pencil_.svg";
import ModalEditOperator from "./ModalEditOperator";

const TableManageOperators = () => {
  const headers = ["#", "Nombre", "Email"];
  const [data, setData] = React.useState([]);
  const [showModal, setShowModal] = React.useState<any>(false);
  const [operatorSelected, setOperatorSelected] = React.useState<any>(false);
  const [deleteButton, setDeleteButton] = React.useState<any>(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/operators").then((res) => {
      setData(res.data);
    });
  }, [showModal]);

  const deleteOperator = (id: any) => {
    axios
      .delete(`http://localhost:8000/api/v1/operators/${id}`)
      .then((res) => alert("Operador eliminado" + res.status));
  };

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
        {data?.map((operator: any, index) => (
          <tr style={deleteButton ? { display: "none" } : {}} key={index + 1}>
            <td style={{ textAlign: "center" }}>{index + 1}</td>
            <td style={{ textAlign: "center" }}>{operator.name}</td>
            <td style={{ textAlign: "center" }}>{operator.email}</td>
            <td>
              <Image
                onClick={() => {
                  setShowModal(!showModal);
                  setOperatorSelected(operator);
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
                  deleteOperator(operator.id);
                  setDeleteButton(!deleteButton);
                }}
              />
            </td>
          </tr>
        ))}
        {showModal && (
          <ModalEditOperator isShow={showModal} operator={operatorSelected} />
        )}
      </tbody>
    </Table>
  );
};

export default TableManageOperators;
