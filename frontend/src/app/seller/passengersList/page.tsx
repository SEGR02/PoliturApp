"use client";
import React from "react";
import styles from "../../styles/sellerHome.module.css";
import styles2 from "../../styles/sellerPassengersList.module.css";
import Navbar from "@/app/components/Navbar";
import Table from "../../components/Table";
import InputCustom from "@/app/components/InputCustom";
import { useDispatch, useSelector } from "react-redux";
import { setActivitiesList } from "@/store/slices/activitiesList.slice";
import axios from "axios";

const PassengerList = () => {
  const dispatch = useDispatch();
  const activiesList = useSelector((state: any) => state.activitiesList);
  const [activitySelected, setActivitySelected] = React.useState<any>([]);
  const [hour, setHour] = React.useState<any>();
  const [date, setDate] = React.useState<any>();
  const [data, setData] = React.useState<any>();
  const [schedules, setSchedules] = React.useState<any>();

  React.useEffect(() => {
    if (activitySelected) {
      axios
        .get(
          `https://politurapp-production.up.railway.app/api/v1/schedules/${activitySelected?.id}`
        )
        .then((res: any) => {
          res.data.forEach((schedule: any) => {
            schedule.label = schedule.schedule;
          });
          setSchedules(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [activitySelected]);

  React.useEffect(() => {
    axios
      .get("https://politurapp-production.up.railway.app/api/v1/activities")
      .then((res) => {
        res.data.forEach((activity: any) => {
          activity.label = activity.name;
        });
        dispatch(setActivitiesList(res.data));
      })
      .catch((error) => console.log(error));
  }, []);

  const submit = () => {
    axios
      .get(
        `https://politurapp-production.up.railway.app/api/v1/activities/scheduled?date=${date}&hour=${hour?.label}&activityId=${activitySelected?.id}`
      )
      .then((res) => {
        setData(res.data);
        setHour("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Listado de pasajeros</h2>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <Navbar />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}>
          <form className={styles2.inputsContainer} action="">
            <div style={{ display: "flex", gap: "5px" }}>
              <input
                className={styles.inputText}
                style={{ height: "6vh" }}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <InputCustom
                placeholder="Seleccionar Actividad"
                options={activiesList}
                value={activitySelected}
                set={setActivitySelected}
              />
              <InputCustom
                placeholder="Seleccionar Hora"
                options={schedules}
                value={""}
                set={setHour}
              />
              <button type="button" onClick={submit}>
                Buscar
              </button>
            </div>
          </form>
          <Table data={data} />
          {data && (
            <footer className={styles.buttonContainer}>
              <button onClick={() => window.print()} className={styles.button}>
                Imprimir
              </button>
            </footer>
          )}
        </div>
      </div>
    </div>
  );
};

export default PassengerList;
