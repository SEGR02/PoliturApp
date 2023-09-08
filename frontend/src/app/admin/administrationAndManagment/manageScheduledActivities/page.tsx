"use client";
import React from "react";
import styles from "../../../styles/sellerHome.module.css";
import NavbarAdministrationAndManagment from "@/app/components/NavbarAdministrationAndManagment";
import TableManageScheduledActivities from "@/app/components/TableManageScheduledActivities";

const ManageSellers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Administrar Actividades Agendadas</h2>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <NavbarAdministrationAndManagment />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}>
          <TableManageScheduledActivities />
        </div>
      </div>
    </div>
  );
};

export default ManageSellers;
