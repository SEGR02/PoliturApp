"use client";
import React from "react";
import styles from "../../../styles/sellerHome.module.css";
import NavbarAdministrationAndManagment from "@/app/components/NavbarAdministrationAndManagment";
import TableManageOperators from "@/app/components/TableManageOperators";

const AdminOperators = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Administrar Operadores</h2>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <NavbarAdministrationAndManagment />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}>
          <TableManageOperators />
        </div>
      </div>
    </div>
  );
};

export default AdminOperators;
