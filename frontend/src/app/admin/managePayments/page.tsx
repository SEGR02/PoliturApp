"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/sellerHome.module.css";
import styles2 from "../../styles/sellerPassengersList.module.css";
import styles3 from "@/app/styles/creditsReport.module.css";
import NavbarAdmin from "@/app/components/NavbarAdmin";
import axios from "axios";
import InputCustom from "@/app/components/InputCustom";
import TableManagePayments from "@/app/components/TableManagePayments";
import Modal from "@/app/components/Modal";

const ManagePayments = () => {
  const [sinceDate, setSinceData] = useState();
  const [untilDate, setUntilData] = useState();
  const [operator, setOperator] = useState<any>();
  const [operatorsList, setOperatorsList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/operators").then((res) => {
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
            <div style={{ display: "flex", gap: "5px" }}>
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
            </div>
            <div
              style={{ display: "flex", alignContent: "end", height: "6vh" }}
            >
              <button
                className={styles3.button}
                onClick={() => setShowModal(!showModal)}
                type="button"
              >
                Agregar Abono
              </button>
            </div>
          </form>
          {showModal && <Modal isShow={showModal} />}
          {sinceDate && untilDate && !operator && (
            <TableManagePayments sinceDate={sinceDate} untilDate={untilDate} />
          )}
          {sinceDate && untilDate && operator && (
            <TableManagePayments
              sinceDate={sinceDate}
              untilDate={untilDate}
              operator={operator?.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagePayments;
