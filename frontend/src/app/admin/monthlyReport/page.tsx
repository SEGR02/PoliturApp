"use client";
import React, { useEffect } from "react";
import styles from "../../styles/sellerHome.module.css";
import NavbarAdmin from "@/app/components/NavbarAdmin";
import InputCustom from "@/app/components/InputCustom";
import TableReports from "@/app/components/TableReports";
import axios from "axios";

const MonthlyReport = () => {
  const [month, setmonth] = React.useState<any>();
  const [options, setOptions] = React.useState<any>();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/orders/availableMonths")
      .then((res) => setOptions(res.data));
  }, [month]);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div style={{ width: "16%" }}>
          <InputCustom
            value={month}
            set={setmonth}
            options={options}
            placeholder="Seleccione un periodo"
          />
        </div>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <NavbarAdmin />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}>
          {month && (
            <TableReports
              customMonth={month.slice(0, 2)}
              customYear={month.slice(3)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MonthlyReport;
