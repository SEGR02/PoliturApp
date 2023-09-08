"use client";
import React from "react";
import styles from "../../../styles/sellerHome.module.css";
import NavbarAdministrationAndManagment from "@/app/components/NavbarAdministrationAndManagment";
import TableManageSellers from "@/app/components/TableManageSellers";
import { ToastContainer } from "react-toastify";

const ManageSellers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Administrar Vendedores</h2>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <NavbarAdministrationAndManagment />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}>
          <TableManageSellers />
          <ToastContainer position="bottom-right" />
        </div>
      </div>
    </div>
  );
};

export default ManageSellers;
