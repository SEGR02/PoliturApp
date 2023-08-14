"use client";
import React from "react";
import Image from "next/image";
import pencil from "../../assets/🦆 icon _pencil_.svg";
import trash from "../../assets/🦆 icon _trash_.svg";
import styles from "../styles/sellerHome.module.css";
import styles2 from "../styles/sellerConfirm.module.css";
import { useDispatch } from "react-redux";
import { removeActivity } from "@/store/slices/activities.slice";
import { useRouter } from "next/navigation";

const ElementToConfirm = ({
  activityName,
  ntickets,
  total,
  mainTotal,
  setTotal,
  index,
}) => {
  const [show, setShow] = React.useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  if (!show) return null;

  return (
    <>
      <div className={styles2.thead}>
        <p className={styles2.element}>{activityName}</p>
        <p className={styles2.element}>{ntickets}</p>
        <p className={styles2.element}>{total}</p>
        <div className={`${styles2.element} ${styles2.icons}`}>
          <Image
            onClick={() => {
              dispatch(removeActivity(index));
              router.push("/seller/scheudleActivities/");
            }}
            src={pencil}
            alt=""
          />
          <Image
            onClick={() => {
              setShow(!show);
              setTotal(mainTotal - total.slice(0, -4));
              dispatch(removeActivity(index));
            }}
            src={trash}
            alt=""
          />
        </div>
      </div>
      <div className={`${styles.firstLine} ${styles2.firstLine}`}></div>
    </>
  );
};

export default ElementToConfirm;
