"use client";
import React, { useState } from "react";
import styles from "../../../styles/sellerHome.module.css";
import NavbarAdministrationAndManagment from "@/app/components/NavbarAdministrationAndManagment";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SellerRegister = () => {
  const [name, setName] = useState<any>();
  const [rut, setRut] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();

  const submit = () => {
    event?.preventDefault();
    const newSeller = {
      fullname: name,
      email,
      rut,
      password,
      isAdmin: false,
    };

    axios
      .post(
        "https://politurapp-production.up.railway.app/api/v1/auth/register",
        newSeller
      )
      .then((res) => notify())
      .catch((err) => toast.error("Error " + err))
      .finally(clearAll);
  };

  const clearAll = () => {
    setName("");
    setRut("");
    setEmail("");
    setPassword("");
  };

  const notify = () =>
    toast.success("¡Vendedor Creado con Exito!", {
      theme: "colored",
    });

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Registrar Vendedor</h2>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <NavbarAdministrationAndManagment />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}>
          <form onSubmit={submit}>
            <div className={styles.inputsContainer}>
              <label className={styles.label} htmlFor="">
                Nombre y Apellido
              </label>
              <input
                required
                className={styles.inputText}
                type="text"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputs50Container}>
              <div className={styles.inputsContainer50}>
                <label className={styles.label} htmlFor="">
                  Rut
                </label>
                <input
                  required
                  className={styles.inputText}
                  type="text"
                  value={rut}
                  onChange={(e: any) => setRut(e.target.value)}
                />
              </div>
              <div className={styles.inputsContainer50}>
                <label className={styles.label} htmlFor="">
                  Email
                </label>
                <input
                  required
                  className={styles.inputText}
                  type="text"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.inputsContainer}>
              <label className={styles.label} htmlFor="">
                Contraseña
              </label>
              <input
                required
                className={styles.inputText}
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Guardar</button>
              <ToastContainer position="bottom-right" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerRegister;
