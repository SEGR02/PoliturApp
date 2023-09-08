import React from "react";
import styles from "../styles/sellerHome.module.css";
import Image from "next/image";
import user from "@/assets/user-profile-02 (1).svg";
import userYellow from "@/assets/user-yellow.svg";
import manageSellers from "@/assets/peopleBlue.svg";
import manageSellersYellow from "@/assets/🦆 icon _people_.svg";
import createActivity from "@/assets/createActivity.svg";
import createActivityYellow from "@/assets/createActivityYellow.svg";
import manageActivities from "@/assets/calendarblue.svg";
import manageActivitiesYellow from "@/assets/🦆 icon _calendar search_.svg";
import registerOperators from "@/assets/registerOperators.svg";
import registerOperatorsYellow from "@/assets/registerOperatorsYellow.svg";
import adminOperators from "@/assets/adminOperators.svg";
import adminOperatorsYellow from "@/assets/adminOperatorsYellow.svg";
import acitivitesScheduled from "@/assets/manageScheduledActivities.svg";
import acitivitesScheduledYellow from "@/assets/🦆 icon _menu board_.svg";
import back from "@/assets/back.svg";
import logOut from "@/assets/🦆 icon _logout_.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarAdministrationAndManagment = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <Link
        className={styles.link}
        href="/admin/administrationAndManagment/sellerRegister"
      >
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/administrationAndManagment/sellerRegister"
                ? user
                : userYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/admin/administrationAndManagment/sellerRegister"
                ? { color: "#002B5c" }
                : {}
            }
          >
            Registrar Vendedor
          </p>
        </div>
      </Link>
      <Link
        className={styles.link}
        href="/admin/administrationAndManagment/manageSellers"
      >
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/administrationAndManagment/manageSellers"
                ? manageSellers
                : manageSellersYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/admin/administrationAndManagment/manageSellers"
                ? { color: "#002B5c" }
                : {}
            }
          >
            Admin Vendedores
          </p>
        </div>
      </Link>
      <Link
        className={styles.link}
        href="/admin/administrationAndManagment/createActivity"
      >
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/administrationAndManagment/createActivity"
                ? createActivity
                : createActivityYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/admin/administrationAndManagment/createActivity"
                ? { color: "#002B5c" }
                : {}
            }
          >
            Crear Actividad
          </p>
        </div>
      </Link>
      <Link
        className={styles.link}
        href="/admin/administrationAndManagment/manageActivities"
      >
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/administrationAndManagment/manageActivities"
                ? manageActivities
                : manageActivitiesYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/admin/administrationAndManagment/manageActivities"
                ? { color: "#002B5c" }
                : {}
            }
          >
            Admin Actividades
          </p>
        </div>
      </Link>
      <Link
        className={styles.link}
        href="/admin/administrationAndManagment/manageScheduledActivities"
      >
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname ==
              "/admin/administrationAndManagment/manageScheduledActivities"
                ? acitivitesScheduled
                : acitivitesScheduledYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname ==
              "/admin/administrationAndManagment/manageScheduledActivities"
                ? { color: "#002B5c" }
                : {}
            }
          >
            Activ Agendadas
          </p>
        </div>
      </Link>
      <Link
        className={styles.link}
        href="/admin/administrationAndManagment/registerOperators"
      >
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/administrationAndManagment/registerOperators"
                ? registerOperators
                : registerOperatorsYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/admin/administrationAndManagment/registerOperators"
                ? { color: "#002B5c" }
                : {}
            }
          >
            Crear Operadores
          </p>
        </div>
      </Link>
      <Link
        className={styles.link}
        href="/admin/administrationAndManagment/manageOperators"
      >
        <div className={styles.elementNavbar}>
          <Image
            src={
              pathname == "/admin/administrationAndManagment/manageOperators"
                ? adminOperators
                : adminOperatorsYellow
            }
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/admin/administrationAndManagment/manageOperators"
                ? { color: "#002B5c" }
                : {}
            }
          >
            Admin Operadores
          </p>
        </div>
      </Link>
      <Link className={styles.link} href="/admin/dailyReport">
        <div className={styles.elementNavbar}>
          <Image src={back} alt="" />
          <p className={styles.navbarP}>Informes</p>
        </div>
      </Link>
      <Link className={styles.link} href="/login">
        <div className={styles.elementNavbar}>
          <Image src={logOut} alt="" />
          <p className={styles.navbarP}>Cerrar Sesion</p>
        </div>
      </Link>
    </div>
  );
};

export default NavbarAdministrationAndManagment;
