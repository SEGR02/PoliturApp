import React from "react";
import styles from "../styles/sellerHome.module.css";
import Image from "next/image";
import svg from "../../assets/user-profile-02 (1).svg";
import svg2 from "../../assets/🦆 icon _clock_.svg";
import svg3 from "../../assets/🦆 icon _people_.svg";
import svg4 from "../../assets/🦆 icon _calendar search_.svg";
import clockblue from "../../assets/clockblue.svg";
import userYellow from "../../assets/user-yellow.svg";
import peopleBlue from "../../assets/peopleBlue.svg";
import calendarblue from "../../assets/calendarblue.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <Link className={styles.link} href="/seller/createClient">
        <div className={styles.elementNavbar}>
          <Image
            src={pathname == "/seller/createClient" ? svg : userYellow}
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/seller/createClient" ? { color: "#002B5c" } : {}
            }
          >
            Registrar cliente
          </p>
        </div>
      </Link>
      <Link className={styles.link} href="/seller/scheudleActivities">
        <div className={styles.elementNavbar}>
          <Image
            src={pathname == "/seller/scheudleActivities" ? clockblue : svg2}
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/seller/scheudleActivities"
                ? { color: "#002B5c" }
                : {}
            }
          >
            Agendar Actividades
          </p>
        </div>
      </Link>
      <Link className={styles.link} href="/seller/passengersList">
        <div className={styles.elementNavbar}>
          <Image
            src={pathname == "/seller/passengersList" ? peopleBlue : svg3}
            alt=""
          />
          <p
            className={styles.navbarP}
            style={
              pathname == "/seller/passengersList" ? { color: "#002B5c" } : {}
            }
          >
            Listado Pasajeros
          </p>
        </div>
      </Link>
      <Link className={styles.link} href="/seller/calendar">
        <div className={styles.elementNavbar}>
          <Image
            src={pathname == "/seller/calendar" ? calendarblue : svg4}
            alt=""
          />
          <p
            className={styles.navbarP}
            style={pathname == "/seller/calendar" ? { color: "#002B5c" } : {}}
          >
            Calendar
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
