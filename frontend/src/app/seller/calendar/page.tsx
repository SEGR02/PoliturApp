"use client";
import React from "react";
import styles from "../../styles/sellerHome.module.css";
import styles2 from "../../styles/seller.calendar.module.css";
import Navbar from "@/app/components/Navbar";
import InputCustom from "@/app/components/InputCustom";
import { useDispatch, useSelector } from "react-redux";
import { setActivitiesList } from "@/store/slices/activitiesList.slice";
import axios from "axios";
import TableCalendar from "@/app/components/TableCalendar";

const Calendar = () => {
  const dispatch = useDispatch();
  const activiesList = useSelector((state: any) => state.activitiesList);
  const [activitySelected, setActivitySelected] = React.useState<any>();
  const [hour, setHour] = React.useState<any>();
  const [date, setDate] = React.useState<any>();
  const [data, setData] = React.useState<any>();
  const [schedules, setSchedules] = React.useState();

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
    let url = `https://politurapp-production.up.railway.app/api/v1/stock/?`;

    if (date) url += `&date=${date}`;
    if (hour) url += `&hour=${hour?.schedule}`;
    if (activitySelected) url += `&activity_id=${activitySelected?.id}`;

    axios
      .get(url)
      .then((res) => {
        // setTimeout(() => setData(res.data), 100);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Calendar</h2>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <Navbar />
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
            <InputCustom
              placeholder="Seleccionar Actividad"
              options={activiesList}
              value={activitySelected}
              set={setActivitySelected}
            />
            <InputCustom
              placeholder="Seleccionar Hora"
              options={schedules}
              value={hour}
              set={setHour}
            />
            <button type="button" onClick={submit}>
              Buscar
            </button>
          </form>
          <TableCalendar data={data} />
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

export default Calendar;
