"use client";
import React from "react";
import styles from "../../styles/sellerHome.module.css";
import NavbarAdmin from "@/app/components/NavbarAdmin";

const DailyReport = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Informe Diario</h2>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <NavbarAdmin />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}></div>
      </div>
    </div>
  );
};

export default DailyReport;
