"use client";
import React, { useState } from "react";
import styles from "../../styles/sellerHome.module.css";
import styles2 from "../../styles/sellerPassengersList.module.css";
import styles3 from "@/app/styles/creditsReport.module.css";
import NavbarAdmin from "@/app/components/NavbarAdmin";
import TableCreditsReport from "@/app/components/TableCreditsReport";
import InputCustom from "@/app/components/InputCustom";

const CreditsReport = () => {
  const [sinceDate, setSinceData] = useState<any>();
  const [untilDate, setUntilData] = useState<any>();
  const [operator, setOperator] = useState<any>();

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div style={{ width: "16%" }}>
          <InputCustom
            value={operator}
            set={setOperator}
            options={"operatorsList"}
            placeholder="Seleccione un vendedor"
          />
        </div>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <NavbarAdmin />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}>
          <form className={styles2.inputsContainer} action="">
            <div className={styles3.datesContainers}>
              <label className={styles3.datesLabels} htmlFor="">
                Desde
              </label>
              <input
                className={styles.inputText}
                style={{ height: "6vh" }}
                type="date"
                value={sinceDate}
                onChange={(e) => setSinceData(e.target.value)}
              />
            </div>
            <div className={styles3.datesContainers}>
              <label className={styles3.datesLabels} htmlFor="">
                Hasta
              </label>
              <input
                className={styles.inputText}
                style={{ height: "6vh" }}
                type="date"
                value={untilDate}
                onChange={(e) => setUntilData(e.target.value)}
              />
            </div>
          </form>
          {sinceDate && untilDate && (
            <TableCreditsReport sinceDate={sinceDate} untilDate={untilDate} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditsReport;
