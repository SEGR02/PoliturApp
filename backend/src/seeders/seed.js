const db = require("../utils/database");

const activities = [
  {
    id: 1,
    name: "Ascenso al Volcan",
    ticketValue: 135000,
    tiketsPerDay: 12,
  },
  {
    id: 2,
    name: "Termas Geometricas",
    ticketValue: 60000,
    tiketsPerDay: 15,
  },
  {
    id: 3,
    name: "Tour Huilo",
    ticketValue: 55000,
    tiketsPerDay: 15,
  },
  {
    id: 4,
    name: "Tour Zona + Termas Huife",
    ticketValue: 45000,
    tiketsPerDay: 15,
  },
  {
    id: 5,
    name: "Trekking Parque Huerquerhue",
    ticketValue: 60000,
    tiketsPerDay: 12,
  },
  {
    id: 6,
    name: "Trekking Lagunas Andinas",
    ticketValue: 60000,
    tiketsPerDay: 12,
  },
  {
    id: 7,
    name: "Rafting Bajo",
    ticketValue: 35000,
    tiketsPerDay: 24,
  },
  {
    id: 8,
    name: "Rafting Alto",
    ticketValue: 45000,
    tiketsPerDay: 12,
  },
  {
    id: 9,
    name: "Canyoning",
    ticketValue: 45000,
    tiketsPerDay: 8,
  },
  {
    id: 10,
    name: "Hidrospeed",
    ticketValue: 45000,
    tiketsPerDay: 10,
  },
  {
    id: 11,
    name: "Transfer",
    ticketValue: 20000,
    tiketsPerDay: 10,
  },
  {
    id: 12,
    name: "Cuevas Volcanicas",
    ticketValue: 49000,
    tiketsPerDay: 15,
  },
  {
    id: 13,
    name: "Termas Huife",
    ticketValue: 45000,
    tiketsPerDay: 15,
  },
  {
    id: 14,
    name: "Tour Pesca Deportiva",
    ticketValue: 160000,
    tiketsPerDay: 4,
  },
  {
    id: 15,
    name: "Ascenso Volcan Quetrupillan",
    ticketValue: 125000,
    tiketsPerDay: 12,
  },
  {
    id: 16,
    name: "Cabalgata",
    ticketValue: 45000,
    tiketsPerDay: 999,
  },
  {
    id: 17,
    name: "Canopy",
    ticketValue: 30000,
    tiketsPerDay: 999,
  },
  {
    id: 18,
    name: "Cuevas Volcanicas",
    ticketValue: 45000,
    tiketsPerDay: 999,
  },
  {
    id: 19,
    name: "Hidrospeed",
    ticketValue: 45000,
    tiketsPerDay: 40,
  },
  {
    id: 20,
    name: "Huilo Huilo Nino",
    ticketValue: 35000,
    tiketsPerDay: 40,
  },
  {
    id: 21,
    name: "Huilo Huilo",
    ticketValue: 55000,
    tiketsPerDay: 40,
  },
  {
    id: 22,
    name: "Rafting Alto",
    ticketValue: 55000,
    tiketsPerDay: 24,
  },
  {
    id: 23,
    name: "Rafting Bajo",
    ticketValue: 35000,
    tiketsPerDay: 24,
  },
  {
    id: 24,
    name: "Canyinig",
    ticketValue: 45000,
    tiketsPerDay: 8,
  },
  {
    id: 25,
    name: "Pesca Deportiva",
    ticketValue: 95000,
    tiketsPerDay: 4,
  },
  {
    id: 26,
    name: "Termas Geometricas",
    ticketValue: 65000,
    tiketsPerDay: 26,
  },
  {
    id: 27,
    name: "Termas Geometricas Nino",
    ticketValue: 49000,
    tiketsPerDay: 4,
  },
  {
    id: 28,
    name: "Viaje a Valdivia",
    ticketValue: 55000,
    tiketsPerDay: 15,
  },
];

const schedules = [
  {
    activityId: 1,
    schedule: "6:30",
  },
  {
    activityId: 12,
    schedule: "10:00",
  },
  {
    activityId: 12,
    schedule: "14:00",
  },
  {
    activityId: 10,
    schedule: "10:00",
  },
  {
    activityId: 10,
    schedule: "15:00",
  },
  {
    activityId: 3,
    schedule: "8:00",
  },
  {
    activityId: 7,
    schedule: "10:00",
  },
  {
    activityId: 7,
    schedule: "15:00",
  },
  {
    activityId: 7,
    schedule: "18:00",
  },
  {
    activityId: 8,
    schedule: "10:00",
  },
  {
    activityId: 8,
    schedule: "15:00",
  },
  {
    activityId: 8,
    schedule: "18:00",
  },
  {
    activityId: 9,
    schedule: "9:00",
  },
  {
    activityId: 14,
    schedule: "8:30",
  },
  {
    activityId: 2,
    schedule: "12:15",
  },
  {
    activityId: 4,
    schedule: "9:00",
  },
  {
    activityId: 5,
    schedule: "8:00",
  },
];

db.authenticate()
  .then(() => console.log("BD authenticate"))
  .catch((error) => console.log(error));

db.sync()
  .then(() => {
    console.log("exito");
  })
  .catch((error) => console.log(error));

module.exports = { activities, schedules };
