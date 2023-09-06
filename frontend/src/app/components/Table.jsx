"use client";
import Table from "react-bootstrap/Table";
import React from "react";
import axios from "axios";

function ResponsiveExample({ data }) {
  const headers = [
    "Nombre Cliente",
    "Fecha de Nacimiento",
    "Edad",
    "Nacionalidad",
    "N° Documento",
    "N° Telefono",
    "Hora",
    "Fecha Actividad",
    "Alojamiento",
  ];

  const [dataPrueba, setDataPrueba] = React.useState();

  React.useEffect(() => {
    if (data?.length >= 2) {
      const aux = [];
      data?.forEach((element) => {
        axios
          .get(`http://localhost:8000/api/v1/clients/${element.id}`)
          .then((res) => {
            res.data.forEach((user) => {
              user.hour = element.hour;
              user.date = element.date;
            });
            aux.push(...res.data);
          })
          .catch((error) => console.log(error));
      });
      setDataPrueba(aux);
    } else {
      const aux = [];
      data?.forEach((element) => {
        axios
          .get(`http://localhost:8000/api/v1/clients/${element.id}`)
          .then((res) => {
            setDataPrueba(res.data);
            aux.push(...res.data);
          })
          .catch((error) => console.log(error));
      });
    }
  }, [data]);

  if (!data) return null;

  return (
    <Table striped bordered hover variant="" responsive size="sm">
      <thead>
        <tr>
          <th style={{ textAlign: "center" }}>#</th>
          {headers.map((header) => (
            <th style={{ fontSize: "14px", textAlign: "center" }}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataPrueba?.map((data, index) => (
          <tr>
            <td style={{ textAlign: "center" }}>{index + 1}</td>
            <td style={{ textAlign: "center" }}>{data.fullname}</td>
            <td style={{ textAlign: "center" }}>{data.birth}</td>
            <td style={{ textAlign: "center" }}>{data.age}</td>
            <td style={{ textAlign: "center" }}>{data.nationality}</td>
            <td style={{ textAlign: "center" }}>{data.ndocument}</td>
            <td style={{ textAlign: "center" }}>{data.number}</td>
            <td style={{ textAlign: "center" }}>{data.hour}</td>
            <td style={{ textAlign: "center" }}>{data.date}</td>
            <td style={{ textAlign: "center" }}>{data.hotel}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;
