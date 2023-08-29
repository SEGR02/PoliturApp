"use client";
import { useEffect, useState } from "react";
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
  const [passengers, setPassengers] = useState<any>([]);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState<any>("");
  const [paymentType, setPaymentType] = useState<any>({
    value: "Operador",
  });
  const [discount, setDiscount] = useState<any>("");
  const [ticketValue, setTicketValue] = useState<any>("");
  const [isCredit, setIsCredit] = useState<any>({ value: true });
  const [total, setTotal] = useState<any>("0");
  const [currency, setCurrency] = useState<any>({ value: "CLP" });
  const [clients, setClients] = useState([]);
  const [activities, setActivities] = useState([]);
  const [activitySelected, setActivitySelected] = useState<Activity | any>();
  const [schedules, setSchedules] = useState<any>();
  const router = useRouter();
  const dispatch = useDispatch<any>();

  const submit = () => {
    const data = {
      activityId: activitySelected?.id,
      activityName: activitySelected?.name,
      currency: currency.value,
      date,
      discount,
      hour: hour.schedule,
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
    ticketValue: string;
  }

  useEffect(() => {
    if (activitySelected) {
      axios
        .get(
          `https://politurapp-production.up.railway.app/api/v1/schedules/${activitySelected?.id}`
        )
        .then((res: any) => {
          res.data.forEach((schedule: any) => {
            axios
              .get(
                `https://politurapp-production.up.railway.app/api/v1/stock/?date=${date}&hour=${schedule.schedule}&activity_id=${activitySelected.id}`
              )
              .then((ans: any) => {
                if (ans.data) {
                  schedule.label =
                    schedule.schedule + ` (${ans.data[0].stock})`;
                  schedule.disabled = passengers.length > ans.data[0].stock;
                } else {
                  schedule.label =
                    schedule.schedule + ` (${activitySelected.tiketsPerDay})`;
                  schedule.disabled =
                    passengers.length > activitySelected.tiketsPerDay;
                }
              })
              .catch((error) => console.log(error));
          });
          setSchedules(res.data);
        })
        .catch((error) => console.log(error));

      setTicketValue(activitySelected?.ticketValue);
    }
  }, [activitySelected, passengers]);

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
      .get("https://politurapp-production.up.railway.app/api/v1/clients")
      .then((res) => {
        res.data.forEach((client: Client) => {
          client.label = client.fullname;
        });
        setClients(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("https://politurapp-production.up.railway.app/api/v1/activities")
      .then((res) => {
        res.data.forEach((activity: any) => {
          activity.label =
            activity.name + String(` (${activity.tiketsPerDay})`);
        });
        setActivities(res.data);
        dispatch(setActivitiesList(res.data));
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
                {schedules && (
                  <InputCustom options={schedules} value={""} set={setHour} />
                )}
                {!schedules && (
                  <input
                    className={styles.inputText}
                    type="time"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                  />
                )}
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
                  value={total == "0" || Number.isNaN(total) ? "" : total}
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
