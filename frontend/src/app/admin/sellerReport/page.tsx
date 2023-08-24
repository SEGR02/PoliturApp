"use client";
import React, { useEffect } from "react";
import styles from "../../styles/sellerHome.module.css";
import styles2 from "@/app/styles/seller.calendar.module.css";
import NavbarAdmin from "@/app/components/NavbarAdmin";
import InputCustom from "@/app/components/InputCustom";
import TableReports from "@/app/components/TableReports";
import axios from "axios";

const SellerReport = () => {
  const [seller, setSeller] = React.useState<any>();
  const [date, setDate] = React.useState<any>();
  const [sellersList, setSellersList] = React.useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/users").then((res) => {
      res.data.forEach((seller: any) => {
        seller.label = seller.fullname;
      });
      setSellersList(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div style={{ width: "16%" }}>
          <InputCustom
            value={seller}
            set={setSeller}
            options={sellersList}
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
            <input
              className={styles.inputText}
              style={{ height: "6vh" }}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </form>
          {seller && <TableReports customDate={date} sellerId={seller.id} />}
        </div>
      </div>
    </div>
  );
};

export default SellerReport;
