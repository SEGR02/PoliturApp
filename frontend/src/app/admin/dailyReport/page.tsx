"use client";
import { useState } from "react";
import styles from "../../styles/sellerHome.module.css";
import NavbarAdmin from "@/app/components/NavbarAdmin";
import TableReports from "@/app/components/TableReports";
import styles2 from "@/app/styles/seller.calendar.module.css";

const DailyReport = () => {
  const [date, setDate] = useState<any>();
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Informe Diario</h2>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <NavbarAdmin />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}>
          <form className={styles2.inputsContainer} action="">
            <input
              className={styles.inputText}
              style={{ height: "6vh" }}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </form>
          <TableReports customDate={date} />
        </div>
      </div>
    </div>
  );
};

export default DailyReport;
