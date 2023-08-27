import React from "react";
import styles from "../styles/sellerHome.module.css";
import Image from "next/image";
import DailyReport from "../../assets/dailyReport.svg";
import dailyReportYellow from "../../assets/dailyReportYellow.svg";
import sellerReport from "../../assets/sellerReport.svg";
import sellerReportYellow from "../../assets/sellerReportYellow.svg";
import monthlyReport from "../../assets/monthlyReport.svg";
import monthlyReportYellow from "../../assets/monthlyReportYellow.svg";
import passengersList from "../../assets/peopleBlue.svg";
import passengersListYellow from "../../assets/🦆 icon _people_.svg";
import creditsReport from "@/assets/creditsReport.svg";
import creditsReportYellow from "@/assets/creditsReportYellow.svg";
import managePayments from "@/assets/managePayments.svg";
import managePaymentsYellow from "@/assets/managePaymentsYellow.svg";
import allCredits from "@/assets/allCredits.svg";
import allCreditsYellow from "@/assets/allCreditsYellow.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarAdmin = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <Link className={styles.link} href="/admin/dailyReport">
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/dailyReport" ? DailyReport : dailyReportYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={pathname == "/admin/dailyReport" ? { color: "#002B5c" } : {}}
          >
            Informe Diario
          </p>
        </div>
      </Link>
      <Link className={styles.link} href="/admin/sellerReport">
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/sellerReport"
                ? sellerReport
                : sellerReportYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/admin/sellerReport" ? { color: "#002B5c" } : {}
            }
          >
            Informe Vendedor
          </p>
        </div>
      </Link>
      <Link className={styles.link} href="/admin/monthlyReport">
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/monthlyReport"
                ? monthlyReport
                : monthlyReportYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/admin/monthlyReport" ? { color: "#002B5c" } : {}
            }
          >
            Informe Mensual
          </p>
        </div>
      </Link>
      <Link className={styles.link} href="/admin/passengersList">
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/passengersList"
                ? passengersList
                : passengersListYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/admin/passengersList" ? { color: "#002B5c" } : {}
            }
          >
            Listado Pasajeros
          </p>
        </div>
      </Link>
      <Link className={styles.link} href="/admin/creditsReport">
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/creditsReport"
                ? creditsReport
                : creditsReportYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/admin/creditsReport" ? { color: "#002B5c" } : {}
            }
          >
            Informe Creditos
          </p>
        </div>
      </Link>
      <Link className={styles.link} href="/admin/managePayments">
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/managePayments"
                ? managePayments
                : managePaymentsYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/admin/managePayments" ? { color: "#002B5c" } : {}
            }
          >
            Gestionar Pagos
          </p>
        </div>
      </Link>
      <Link className={styles.link} href="/admin/allCredits">
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/allCredits" ? allCredits : allCreditsYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={pathname == "/admin/allCredits" ? { color: "#002B5c" } : {}}
          >
            Todos Creditos
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NavbarAdmin;
