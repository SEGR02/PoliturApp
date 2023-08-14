"use client";
import React, { useEffect } from "react";
import styles from "../../styles/sellerHome.module.css";
import styles2 from "../../styles/sellerScheudleActivities.module.css";
import InputCustom2 from "../../components/InputCustom2";
import InputCustom from "../../components/InputCustom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setActivities2 } from "@/store/slices/activities.slice";
import { setActivitiesList } from "@/store/slices/activitiesList.slice";

const scheudleActivities = () => {
  const [passengers, setPassengers] = React.useState<any>([]);
  const [date, setDate] = React.useState("");
  const [hour, setHour] = React.useState<any>("");
  const [paymentType, setPaymentType] = React.useState<any>({
    value: "Operador",
  });
  const [discount, setDiscount] = React.useState<any>("");
  const [ticketValue, setTicketValue] = React.useState<any>("");
  const [isCredit, setIsCredit] = React.useState<any>({ value: true });
  const [total, setTotal] = React.useState<any>("0");
  const [currency, setCurrency] = React.useState<any>({ value: "CLP" });
  const [clients, setClients] = React.useState([]);
  const aux: any = [];
  const [activities, setActivities] = React.useState([]);
  const [fullActivitySelected, setFullActivitySelected] = React.useState<any>();
  const [activitySelected, setActivitySelected] = React.useState("");
  const [activitiesFullData, setActivitiesFullData] = React.useState<
    Activity | any
  >();
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const submit = () => {
    const data = {
      activityId: fullActivitySelected?.id,
      activityName: fullActivitySelected?.name,
      currency: currency.value,
      date,
      discount,
      hour: hour.label.slice(0, -5),
      isCredit: isCredit.value,
      passengers,
      passengersQty: passengers.length,
      paymentType: paymentType.value,
      total,
    };
    dispatch(setActivities2(data));
    router.push("/seller/scheudleActivities/confirm");
  };

  interface Client {
    fullname: string;
    label: string;
  }

  interface Activity {
    name: string;
    tiketsPerDay: string;
  }

  useEffect(() => {
    const searchActivityPrice = () => {
      return activitiesFullData?.find(
        (activity: Activity) => activity.name == activitySelected?.slice(0, -5)
      );
    };
    const fullActivitySelected = searchActivityPrice();
    setTicketValue(
      fullActivitySelected ? fullActivitySelected.ticketValue : ""
    );
    setFullActivitySelected(fullActivitySelected);
  }, [activitySelected]);

  useEffect(() => {
    const calculateTotal = () => {
      return passengers.length * Number(ticketValue);
    };
    setTotal(calculateTotal());
  }, [ticketValue, passengers]);

  useEffect(() => {
    const calculateDiscount = () => {
      const totalLocal = passengers.length * Number(ticketValue);
      const discount = (totalLocal - total) / totalLocal;
      return (discount * 100).toFixed(2);
    };
    setDiscount(calculateDiscount());
  }, [total]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/clients")
      .then((res) => {
        res.data.forEach((client: Client) => {
          client.label = client.fullname;
        });
        setClients(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:8000/api/v1/activities")
      .then((res) => {
        setActivitiesFullData(res.data);
        res.data.forEach((activity: Activity) => {
          aux.push(activity.name + String(` (${activity.tiketsPerDay})`));
        });
        setActivities(aux);
        dispatch(setActivitiesList(aux));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2>Agendar actividad turistica</h2>
        </div>
        <div className={styles.firstLine}></div>
        <div className={styles.bodyContainer}>
          <Navbar />
          <div className={styles.secondLine}></div>
          <div className={styles.bodyContent}>
            <div className={styles.inputsContainer}>
              <div className={styles.inputsContainer}>
                <label className={styles.label} htmlFor="">
                  Nombre de los Pasajeros
                </label>
                <InputCustom2
                  options={clients}
                  value={passengers}
                  set={setPassengers}
                />
              </div>
            </div>
            <div className={styles.inputs50Container}>
              <div className={styles.inputsContainer50}>
                <label className={styles.label} htmlFor="">
                  Fecha
                </label>
                <input
                  className={styles.inputText}
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className={styles.inputsContainer50}>
                <label className={styles.label} htmlFor="">
                  Actividad
                </label>
                <InputCustom
                  options={activities}
                  value={""}
                  set={setActivitySelected}
                />
              </div>
            </div>
            <div className={styles.inputs50Container}>
              <div className={styles.inputsContainer50}>
                <label className={styles.label} htmlFor="">
                  Hora de la Actividad
                </label>
                <InputCustom
                  options={[
                    { id: 1, label: "9:00 am (12)", value: "9:00 am" },
                    { id: 2, label: "3:00 pm (12)", value: "3:00 pm" },
                  ]}
                  value={""}
                  set={setHour}
                />
              </div>
              <div className={styles.inputsContainer50}>
                <label className={styles.label} htmlFor="">
                  Porcentaje de Descuento
                </label>
                <input
                  disabled
                  className={styles.inputText}
                  type="text"
                  value={discount == 0 || discount == "NaN" ? "" : discount}
                />
              </div>
            </div>
            <div className={styles.inputs50Container}>
              <div className={styles.inputsContainer50}>
                <label className={styles.label} htmlFor="">
                  Valor Ticket
                </label>
                <input
                  disabled
                  className={styles.inputText}
                  type="text"
                  value={ticketValue}
                />
              </div>
              <div className={styles.inputsContainer50}>
                <label className={styles.label} htmlFor="">
                  Cantidad de Pasajeros
                </label>
                <input
                  disabled
                  className={styles.inputText}
                  type="text"
                  value={passengers.length == 0 ? "" : passengers.length}
                />
              </div>
            </div>
            <div className={styles2.buttonContainer}>
              <p className={styles2.pPayment}>
                TOTAL A PAGAR:{" "}
                <input
                  className={styles2.inputTotal}
                  type="text"
                  value={total == "0" ? "" : total}
                  onChange={(e) => setTotal(e.target.value)}
                />
                <span>{currency?.value}</span>
              </p>
              <button onClick={() => submit()} className={styles.button}>
                Agendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default scheudleActivities;
