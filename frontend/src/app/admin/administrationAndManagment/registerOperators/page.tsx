"use client";
import React, { useState } from "react";
import styles from "../../../styles/sellerHome.module.css";
import NavbarAdministrationAndManagment from "@/app/components/NavbarAdministrationAndManagment";
import axios from "axios";

const RegisterOperators = () => {
  const [operatorName, setOperatorName] = useState();
  const [operatorEmail, setOperatorEmail] = useState();

  const submit = () => {
    const newOperator = { name: operatorName, email: operatorEmail };

    axios
      .post("http://localhost:8000/api/v1/operators", newOperator)
      .then((res) => alert("user created" + res.status));
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Registrar Operadores</h2>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <NavbarAdministrationAndManagment />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}>
          <div className={styles.inputsContainer}>
            <label className={styles.label} htmlFor="">
              Nombre del Operador
            </label>
            <input
              className={styles.inputText}
              type="text"
              value={operatorName}
              onChange={(e: any) => setOperatorName(e.target.value)}
            />
          </div>
          <div className={styles.inputsContainer}>
            <label className={styles.label} htmlFor="">
              Email
            </label>
            <input
              className={styles.inputText}
              type="text"
              value={operatorEmail}
              onChange={(e: any) => setOperatorEmail(e.target.value)}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              onClick={() => submit()}
              className={styles.button}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterOperators;
