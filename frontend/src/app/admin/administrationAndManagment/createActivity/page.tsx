"use client";
import React, { useState } from "react";
import styles from "../../../styles/sellerHome.module.css";
import NavbarAdministrationAndManagment from "@/app/components/NavbarAdministrationAndManagment";
import axios from "axios";
import InputCustom2 from "@/app/components/InputCustom2";

const CreateActivity = () => {
  const [activityName, setActivityName] = useState();
  const [ticketValue, setTicketValue] = useState();
  const [maxPassengers, setMaxPassengers] = useState();
  const [schedules, setSchedules] = useState<any>([]);
  const [schedulesList, setScheduleList] = useState<any>();

  const submit = () => {
    const newActivity = {
      id: Math.floor(Math.random() * 967160) + 1,
      name: activityName,
      ticketValue,
      tiketsPerDay: maxPassengers,
    };

    console.log(newActivity);
    console.log(schedulesList);

    axios
      .post("http://localhost:8000/api/v1/activities/create", newActivity)
      .then((res) => {
        schedulesList.forEach((schedule: any) => {
          axios
            .post("http://localhost:8000/api/v1/schedules", {
              activityId: res.data.id,
              schedule: schedule?.label,
            })
            .then((res) => alert("Registro de horario exitoso" + res.status))
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Crear Actividad</h2>
      </div>
      <div className={styles.firstLine}></div>
      <div className={styles.bodyContainer}>
        <NavbarAdministrationAndManagment />
        <div className={styles.secondLine}></div>
        <div className={styles.bodyContent}>
          <div className={styles.inputs50Container}>
            <div className={styles.inputsContainer50}>
              <label className={styles.label} htmlFor="">
                Nombre de la Actividad
              </label>
              <input
                className={styles.inputText}
                type="text"
                value={activityName}
                onChange={(e: any) => setActivityName(e.target.value)}
              />
            </div>
            <div className={styles.inputsContainer50}>
              <label className={styles.label} htmlFor="">
                Valor del ticket
              </label>
              <input
                className={styles.inputText}
                type="text"
                value={ticketValue}
                onChange={(e: any) => setTicketValue(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.inputs50Container}>
            <div className={styles.inputsContainer50}>
              <label className={styles.label} htmlFor="">
                Cantidad Maxima de Pasajeros
              </label>
              <input
                className={styles.inputText}
                type="text"
                value={maxPassengers}
                onChange={(e: any) => setMaxPassengers(e.target.value)}
              />
            </div>
            <div className={styles.inputsContainer50}>
              <label className={styles.label} htmlFor="">
                Horarios de la Actividad
              </label>
              <input
                className={styles.inputText}
                type="time"
                onChange={(e: any) => {
                  const aux = schedules;
                  aux.push({ label: e.target.value });
                  setSchedules(aux);
                }}
              />
            </div>
          </div>
          <div className={styles.inputsContainer}>
            <label className={styles.label} htmlFor="">
              Confirma los horarios
            </label>
            <InputCustom2
              options={schedules}
              value={schedulesList}
              set={setScheduleList}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              onClick={() => submit()}
              className={styles.button}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateActivity;
