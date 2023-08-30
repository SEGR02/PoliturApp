import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import trash from "@/assets/🦆 icon _trash_.svg";
import pencil from "@/assets/🦆 icon _pencil_.svg";
import ModalEditSeller from "./ModalEditSeller";

const TableManageSellers = () => {
  const headers = ["#", "Nombre", "Email", "Contraseña"];
  const [data, setData] = React.useState([]);
  const [showModal, setShowModal] = React.useState<any>(false);
  const [sellerSelected, setSellerSelected] = React.useState<any>(false);
  const [deleteButton, setDeleteButton] = React.useState<any>(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/users?isAdmin=false")
      .then((res) => {
        setData(res.data);
      });
  }, [showModal]);

  const deleteSeller = (id: any) => {
    axios
      .delete(`http://localhost:8000/api/v1/auth/delete/${id}`)
      .then((res) => alert("Vendedor eliminado" + res.status));
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
        {data?.map((seller: any, index) => (
          <tr style={deleteButton ? { display: "none" } : {}} key={index + 1}>
            <td style={{ textAlign: "center" }}>{index + 1}</td>
            <td style={{ textAlign: "center" }}>{seller.fullname}</td>
            <td style={{ textAlign: "center" }}>{seller.email}</td>
            <td style={{ textAlign: "center" }}>
              {seller.password.slice(0, 10)}
            </td>
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
          <ModalEditSeller isShow={showModal} seller={sellerSelected} />
        )}
      </tbody>
    </Table>
  );
};

export default TableManageSellers;
