"use client";
import React, { useEffect } from "react";
import styles from "../../styles/sellerHome.module.css";
import InputCustom from "../../components/InputCustom";
import axios from "axios";
import data from "../../utils/data.module.js";
import Navbar from "@/app/components/Navbar";
import { ToastContainer, toast } from "react-toastify";

const SellerHome = () => {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [date, setDate] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [nationality, setNationality] = React.useState<any>("");
  const [documentType, setDocumentType] = React.useState<any>("");
  const [numberDocument, setNumberDocument] = React.useState<any>(0);
  const [hotel, setHotel] = React.useState("");
  const [operator, setOperator] = React.useState<any>({ value: "" });
  const [operatorsList, setOperatorsList] = React.useState<any>([]);

  const submit = () => {
    event?.preventDefault();

    const data = {
      fullname: name,
      number,
      email,
      birth: date,
      age,
      nationality: nationality.value,
      isPassport: documentType.value,
      ndocument: numberDocument,
      operator: operator?.name,
      hotel: operator?.name ? operator?.name : hotel,
    };

    if (nationality && documentType) {
      axios
        .post("http://localhost:8000/api/v1/clients", data)
        .then((res) => {
          toast.success("¡Cliente Creado con Exito!", {
            theme: "colored",
          });
          setAllStates();
        })
        .catch((err) =>
          toast.error("Error verifica los campos " + err.response.status)
        );
    } else toast.error("Error verifica los campos faltantes");
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/operators").then((res) => {
      res.data.forEach((operator: any) => {
        operator.label = operator.name;
      });
      setOperatorsList(res.data);
    });
  }, []);

  const setAllStates = () => {
    setName("");
    setNumber("");
    setEmail("");
    setDate("");
    setAge(0);
    setNumberDocument("");
    setHotel("");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2>Registrar un Cliente Nuevo</h2>
        </div>
        <div className={styles.firstLine}></div>
        <div className={styles.bodyContainer}>
          <Navbar />
          <div className={styles.secondLine}></div>
          <div className={styles.bodyContent}>
            <form onSubmit={submit}>
              <div className={styles.inputsContainer}>
                <label className={styles.label} htmlFor="">
                  Nombre y Apellido*
                </label>
                <input
                  required
                  className={styles.inputText}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  title="Por favor, complete este campo"
                />
              </div>
              <div className={styles.inputs50Container}>
                <div className={styles.inputsContainer50}>
                  <label className={styles.label} htmlFor="">
                    Numero de Telefono*
                  </label>
                  <input
                    required
                    className={styles.inputText}
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className={styles.inputsContainer50}>
                  <label className={styles.label} htmlFor="">
                    Email*
                  </label>
                  <input
                    required
                    className={styles.inputText}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.inputs25Container}>
                <div className={styles.inputsContainer25}>
                  <label className={styles.label} htmlFor="">
                    Fecha de Nacimiento*
                  </label>
                  <input
                    required
                    className={styles.inputText}
                    type="date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      setAge(2023 - Number(e.target.value.slice(0, 4)));
                    }}
                  />
                </div>
                <div className={styles.inputsContainer25}>
                  <label className={styles.label} htmlFor="">
                    Edad
                  </label>
                  <input
                    disabled
                    className={styles.inputText}
                    type="text"
                    value={age == 0 ? "" : age}
                  />
                </div>
                <div className={styles.inputsContainer25}>
                  <label className={styles.label} htmlFor="">
                    Nacionalidad*
                  </label>
                  <InputCustom
                    options={data}
                    value={nationality}
                    set={setNationality}
                  />
                </div>
                <div className={styles.inputsContainer25}>
                  <label className={styles.label} htmlFor="">
                    Tipo de Documento*
                  </label>
                  <InputCustom
                    options={[
                      { id: 1, label: "Rut", value: false },
                      { id: 2, label: "Pasaporte", value: true },
                    ]}
                    value={documentType}
                    set={setDocumentType}
                  />
                </div>
              </div>
              <div className={styles.inputs33Container}>
                <div className={styles.inputsContainer50}>
                  <label className={styles.label} htmlFor="">
                    N° de Documento*
                  </label>
                  <input
                    required
                    className={styles.inputText}
                    type="number"
                    value={numberDocument == 0 ? "" : numberDocument}
                    onChange={(e) => setNumberDocument(e.target.value)}
                  />
                </div>
                <div className={styles.inputsContainer25}>
                  <label className={styles.label} htmlFor="">
                    Operador
                  </label>
                  <InputCustom
                    options={operatorsList}
                    value={operator}
                    set={setOperator}
                  />
                </div>
                <div className={styles.inputsContainer25}>
                  <label className={styles.label} htmlFor="">
                    Alojamiento*
                  </label>
                  <input
                    className={styles.inputText}
                    type="text"
                    value={operator?.name ? operator?.name : hotel}
                    onChange={(e) => setHotel(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.button}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
};

export default SellerHome;
