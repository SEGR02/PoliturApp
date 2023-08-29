"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/sellerHome.module.css";
import styles2 from "../../styles/sellerPassengersList.module.css";
import styles3 from "@/app/styles/creditsReport.module.css";
import NavbarAdmin from "@/app/components/NavbarAdmin";
import axios from "axios";
import InputCustom from "@/app/components/InputCustom";
import TableManagePayments from "@/app/components/TableManagePayments";

const ManagePayments = () => {
  const [sinceDate, setSinceData] = useState();
  const [untilDate, setUntilData] = useState();
  const [operator, setOperator] = useState();
  const [operatorsList, setOperatorsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://politurapp-production.up.railway.app/api/v1/operators")
      .then((res) => {
        res.data.forEach((operator: any) => {
          operator.label = operator.name;
        });
        setOperatorsList(res.data);
      });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div style={{ width: "16%" }}>
          <InputCustom
            value={operator}
            set={setOperator}
            options={operatorsList}
            placeholder="Seleccione un Operador"
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
                onChange={(e: any) => setSinceData(e.target.value)}
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
                onChange={(e: any) => setUntilData(e.target.value)}
              />
            </div>
          </form>
          <TableManagePayments />
        </div>
      </div>
    </div>
  );
};

export default ManagePayments;
