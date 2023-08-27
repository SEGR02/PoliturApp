"use client";
import React, { useEffect } from "react";
import styles from "../../../styles/sellerHome.module.css";
import styles2 from "../../../styles/sellerConfirm.module.css";
import minus from "../../../../assets/🦆 icon _card pos_.svg";
import ElementToConfirm from "../../../components/ElementToConfirm";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import ChoosePaymentMethod from "../../../components/ChoosePaymentMethod";
import pencil from "../../../../assets/🦆 icon _pencil_.svg";
import trash from "../../../../assets/🦆 icon _trash_.svg";
import {
  removeAllPayments,
  removePayment,
} from "@/store/slices/paymentsList.slice";
import axios from "axios";
import { removeAllActivities } from "@/store/slices/activities.slice";

const Confirm = () => {
  const activities = useSelector((state: any) => state.activities.data);
  const router = useRouter();
  const dispatch = useDispatch();
  const [total, setTotal] = React.useState<any>();
  const [payments, setPayments] = React.useState<any>([]);
  const [totalPayments, setTotalPayments] = React.useState<any>();
  const paymentsList = useSelector((state: any) => state.paymentsList.data);
  const sellerId: any = localStorage.getItem("sellerId");
  const [operatorsList, setOperatorsList] = React.useState();

  const submit = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const finalDate = `${year}-${month < 10 ? `0${month}` : month}-${day}`;

    axios
      .post("http://localhost:8000/api/v1/orders", {
        total,
        activitiesQty: activities.length,
        payments_qty: paymentsList.length,
        buyDate: finalDate,
        sellerId,
        isCredit: paymentsList?.[0]?.isCredit,
        operator: paymentsList?.[0]?.operator,
      })
      .then((res) => {
        paymentsList.forEach((payment: any) => {
          axios
            .post("http://localhost:8000/api/v1/payments", {
              isCredit: payment.isCredit,
              paymentType: payment.paymentType,
              currency: payment.currency,
              total: payment.amount,
              orderId: res.data.id,
            })
            .then((res) => {
              alert("Actividad turistica agendada desde confirm" + res.status);
            })
            .catch((error) => alert("Algo anda mal" + error));
        });

        activities.forEach((activity: any) => {
          axios
            .post("http://localhost:8000/api/v1/activities", {
              date: activity.date,
              passengersQty: activity.passengers.length,
              hour: activity.hour,
              activityId: activity.activityId,
              discount: activity.discount,
              isCredit: paymentsList[0].isCredit,
              paymentType: paymentsList[0].paymentType,
              currency: paymentsList[0].currency,
              total: activity.total,
              passengers: activity.passengers,
              orderId: res.data.id,
            })
            .then((res) => {
              alert("Actividad turistica agendada desde confirm" + res.status);
              router.push("/seller/createClient");
              dispatch(removeAllActivities());
              dispatch(removeAllPayments());
            })
            .catch((error) => alert("Algo anda mal" + error));
        });
        alert("orden agendada desde confirm" + res.status);
      })
      .catch((error) => alert("Algo anda mal" + error));
  };

  useEffect(() => {
    let aux = 0;
    for (let i = 0; i < activities.length; i++) {
      aux += Number(activities[i].total);
    }
    setTotal(aux);
  }, [activities]);

  useEffect(() => {
    let aux = 0;
    for (let i = 0; i < paymentsList.length; i++) {
      if (paymentsList[i].amount) aux += Number(paymentsList[i].amount);
    }
    setTotalPayments(aux);
  }, [paymentsList]);

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
        <h2>Resumen de las Actividades Seleccionadas</h2>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <div className={styles.secondLine} style={{ margin: 0 }}></div>
        <div className={`${styles2.bodyContent} ${styles.bodyContent}`}>
          <div>
            <div className={styles2.thead}>
              <p className={styles2.element}>Actividad</p>
              <p className={styles2.element}>N° de Tickets</p>
              <p className={styles2.element}>Total</p>
              <p className={styles2.element}></p>
            </div>
            <div className={`${styles.firstLine} ${styles2.firstLine}`}></div>
            {activities?.map((activity: any, index: any) => (
              <>
                <ElementToConfirm
                  activityName={activity.activityName}
                  ntickets={activity.passengersQty}
                  total={`${activity.total} ${activity.currency}`}
                  mainTotal={total}
                  setTotal={setTotal}
                  index={index}
                />
              </>
            ))}
            <div className={styles2.thead}>
              <p className={styles2.element}>Total</p>
              <p className={styles2.element}></p>
              <p className={styles2.element}>
                <b>{total - totalPayments} CLP</b>
              </p>
              <div className={`${styles2.element} ${styles2.icons}`}>
                <Image
                  onClick={() => setPayments([...payments, ""])}
                  src={minus}
                  alt=""
                />
              </div>
            </div>
          </div>
          {paymentsList?.map((paymentsList: any, index: any) => (
            <>
              <div className={`${styles.firstLine} ${styles2.firstLine}`}></div>
              <div className={styles2.thead}>
                <p className={styles2.element}>
                  {paymentsList?.isCredit ? "Credito" : "De Contado"}
                </p>
                <p className={styles2.element}>{paymentsList?.paymentType}</p>
                <p className={styles2.element}>{`${
                  paymentsList?.amount
                    ? paymentsList?.amount
                    : paymentsList?.operator
                } ${
                  paymentsList?.currency != undefined
                    ? paymentsList?.currency
                    : ""
                }`}</p>
                <div className={`${styles2.element} ${styles2.icons}`}>
                  <Image
                    onClick={() => dispatch(removePayment(index))}
                    style={{ cursor: "pointer" }}
                    src={pencil}
                    alt=""
                  />
                  <Image
                    onClick={() => dispatch(removePayment(index))}
                    style={{ cursor: "pointer" }}
                    src={trash}
                    alt=""
                  />
                </div>
              </div>
            </>
          ))}
          {total - totalPayments !== 0 &&
            payments?.map((a: any) => (
              <>
                <ChoosePaymentMethod
                  set={setPayments}
                  total={total}
                  operatorsList={operatorsList}
                />
              </>
            ))}
          <div className={styles.buttonContainer}>
            <button
              onClick={() => router.push("/seller/scheudleActivities/")}
              className={`${styles.button} ${styles2.button}`}
            >
              Añadir Actividad
            </button>
            <button
              onClick={() =>
                total - totalPayments == 0 ||
                paymentsList?.[0]?.isCredit == true
                  ? submit()
                  : alert("No esta 100% paga la orden")
              }
              className={`${styles.button} ${styles2.button}`}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
