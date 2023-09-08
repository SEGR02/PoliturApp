"use client";
import React, { useEffect } from "react";
import styles from "../../styles/sellerHome.module.css";
import NavbarAdmin from "@/app/components/NavbarAdmin";
import InputCustom from "@/app/components/InputCustom";
import TableReports from "@/app/components/TableReports";
import axios from "axios";

const MonthlyReport = () => {
  const [month, setMonth] = React.useState<any>();
  const [options, setOptions] = React.useState<any>();
  const [sellersList, setSellersList] = React.useState<any>();
  const [sellerSelected, setSellerSelected] = React.useState<any>();

  useEffect(() => {
    axios
      .get(
        "https://politurapp-production.up.railway.app/api/v1/orders/availableMonths"
      )
      .then((res) => setOptions(res.data));

    axios
      .get("https://politurapp-production.up.railway.app/api/v1/users")
      .then((res) => {
        res.data.forEach((seller: any) => {
          seller.label = seller.fullname;
        });
        setSellersList(res.data);
      });
  }, [month]);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div style={{ width: "33%", display: "flex", gap: "20px" }}>
          <InputCustom
            value={month}
            set={setMonth}
            options={options}
            placeholder="Seleccione un periodo *"
          />
          <InputCustom
            value={sellerSelected}
            set={setSellerSelected}
            options={sellersList}
            placeholder="Seleccione un Vendedor"
          />
        </div>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <NavbarAdmin />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}>
          {month && !sellerSelected && (
            <TableReports
              customMonth={month.slice(0, 2)}
              customYear={month.slice(3)}
            />
          )}
          {month && sellerSelected && (
            <TableReports
              customMonth={month.slice(0, 2)}
              customYear={month.slice(3)}
              sellerId={sellerSelected?.id}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MonthlyReport;
