import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import trash from "@/assets/🦆 icon _trash_.svg";
import pencil from "@/assets/🦆 icon _pencil_.svg";
import ModalEditSeller from "./ModalEditSeller";
import { ToastContainer, toast } from "react-toastify";

const TableManageSellers = () => {
  const headers = ["#", "Nombre", "Email", "Contraseña"];
  const [data, setData] = React.useState<any>();
  const [showModal, setShowModal] = React.useState<any>(false);
  const [sellerSelected, setSellerSelected] = React.useState<any>(false);

  useEffect(() => {
    axios
      .get(
        "https://politurapp-production.up.railway.app/api/v1/users?isAdmin=false"
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const deleteSeller = (id: any, index: any) => {
    axios
      .delete(
        `https://politurapp-production.up.railway.app/api/v1/auth/delete/${id}`
      )
      .then((res) => {
        toast.success("¡Vendedor Eliminado con Exito!", {
          theme: "colored",
        });
        setData((prevData: any) =>
          prevData.filter((seller: any, i: any) => i !== index)
        );
      })
      .catch((err) => toast.error("Error " + err));
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
        {data?.map((seller: any, index: any) => (
          <tr key={index + 1}>
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
                onClick={() => deleteSeller(seller.id, index)}
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
