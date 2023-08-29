const db = require("../utils/database");

const activities = [
  {
    id: 1,
    name: "Ascenso al Volcan Villarica",
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
    tiketsPerDay: 40,
  },
  {
    id: 4,
    name: "Tour Zona + Termas Huife",
    ticketValue: 45000,
    tiketsPerDay: 40,
  },
  {
    id: 5,
    name: "Trekking Parque Huerquerhue",
    ticketValue: 65000,
    tiketsPerDay: 15,
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
    tiketsPerDay: 18,
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
    tiketsPerDay: 999,
  },
  {
    id: 11,
    name: "Transfer Regular Arpto - Pucon",
    ticketValue: 20000,
    tiketsPerDay: 15,
  },
  {
    id: 12,
    name: "Cuevas Volcanicas",
    ticketValue: 45000,
    tiketsPerDay: 999,
  },
  {
    id: 13,
    name: "Termas Huife",
    ticketValue: 45000,
    tiketsPerDay: 40,
  },
  {
    id: 14,
    name: "Pesca Deportiva",
    ticketValue: 95000,
    tiketsPerDay: 4,
  },
  {
    id: 15,
    name: "Cabalgata",
    ticketValue: 45000,
    tiketsPerDay: 999,
  },
  {
    id: 16,
    name: "Canopy",
    ticketValue: 30000,
    tiketsPerDay: 999,
  },
  {
    id: 17,
    name: "Tour Huilo Niño",
    ticketValue: 35000,
    tiketsPerDay: 40,
  },
  {
    id: 18,
    name: "Termas Geometricas Niño",
    ticketValue: 49000,
    tiketsPerDay: 4,
  },
  {
    id: 19,
    name: "Viaje a Valdivia",
    ticketValue: 55000,
    tiketsPerDay: 15,
  },
  {
    id: 20,
    name: "Tour Cultural Mapuche",
    ticketValue: 45000,
    tiketsPerDay: 15,
  },
  {
    id: 21,
    name: "Tour Zona + Termas Niño",
    ticketValue: 35000,
    tiketsPerDay: 10,
  },
  {
    id: 22,
    name: "Transfer Privado Arpto - Pucon 1",
    ticketValue: 35000,
    tiketsPerDay: 15,
  },
  {
    id: 23,
    name: "Transfer Privado Arpto - Pucon 2",
    ticketValue: 35000,
    tiketsPerDay: 15,
  },
  {
    id: 24,
    name: "Transfer Privado Arpto - Pucon 3",
    ticketValue: 85000,
    tiketsPerDay: 15,
  },
  {
    id: 25,
    name: "Transfer Privado Pucon - Arpto 1",
    ticketValue: 85000,
    tiketsPerDay: 15,
  },
  {
    id: 26,
    name: "Transfer Privado Pucon - Arpto 2",
    ticketValue: 85000,
    tiketsPerDay: 15,
  },
  {
    id: 27,
    name: "Transfer Privado Pucon - Arpto 3",
    ticketValue: 85000,
    tiketsPerDay: 15,
  },
  {
    id: 28,
    name: "Transfer Regular Pucon - Arpto 1",
    ticketValue: 85000,
    tiketsPerDay: 15,
  },
  {
    id: 29,
    name: "Transfer Regular Pucon - Arpto 2",
    ticketValue: 85000,
    tiketsPerDay: 15,
  },
  {
    id: 30,
    name: "Transfer Regular Pucon - Arpto 3",
    ticketValue: 20000,
    tiketsPerDay: 15,
  },
  {
    id: 31,
    name: "Trekking con Raquetas",
    ticketValue: 65000,
    tiketsPerDay: 15,
  },
  {
    id: 32,
    name: "Ascenso al Volcán Quetrupillan",
    ticketValue: 125000,
    tiketsPerDay: 12,
  },
  {
    id: 33,
    name: "Traslado Pillan",
    ticketValue: 20000,
    tiketsPerDay: 30,
  },
  {
    id: 34,
    name: "Visita Panorámica Pillan",
    ticketValue: 35000,
    tiketsPerDay: 30,
  },
  {
    id: 35,
    name: "Clase Ski Particular 1 hora alta con equipo",
    ticketValue: 110000,
    tiketsPerDay: 30,
  },
  {
    id: 36,
    name: "Clase Ski Particular 2 horas alta con equipo",
    ticketValue: 150000,
    tiketsPerDay: 30,
  },
  {
    id: 37,
    name: "Panorámica con Equipo Adulto",
    ticketValue: 55000,
    tiketsPerDay: 30,
  },
  {
    id: 38,
    name: "Panorámica con Equipo Niño",
    ticketValue: 48000,
    tiketsPerDay: 30,
  },
  {
    id: 39,
    name: "Traslado Pillan + Telesilla + Tubing",
    ticketValue: 55000,
    tiketsPerDay: 30,
  },
  {
    id: 40,
    name: "Traslado Centro Pillan + Tickets Senior Alta",
    ticketValue: 52000,
    tiketsPerDay: 30,
  },
  {
    id: 41,
    name: "Traslado Centro Pillan + Tickets Senior Baja",
    ticketValue: 42000,
    tiketsPerDay: 30,
  },
  {
    id: 42,
    name: "Traslado Centro Pillan + Tickets Mayor Alta",
    ticketValue: 59000,
    tiketsPerDay: 30,
  },
  {
    id: 43,
    name: "Traslado Centro Pillan + Tickets Mayor Baja",
    ticketValue: 47000,
    tiketsPerDay: 30,
  },
  {
    id: 44,
    name: "Traslado Centro Pillan + Tickets Estudiante Alta",
    ticketValue: 52000,
    tiketsPerDay: 30,
  },
  {
    id: 45,
    name: "Traslado Centro Pillan + Tickets Estudiante Baja",
    ticketValue: 42000,
    tiketsPerDay: 30,
  },
  {
    id: 46,
    name: "Traslado Centro Pillan + Tickets Menor -12 Alta",
    ticketValue: 42000,
    tiketsPerDay: 30,
  },
  {
    id: 47,
    name: "Traslado Centro Pillan + Tickets Menor -12 Baja",
    ticketValue: 48000,
    tiketsPerDay: 30,
  },
  {
    id: 48,
    name: "Tickets Pillan Super Alta Senior",
    ticketValue: 39600,
    tiketsPerDay: 30,
  },
  {
    id: 49,
    name: "Tickets Pillan Alta Senior",
    ticketValue: 32400,
    tiketsPerDay: 30,
  },
  {
    id: 50,
    name: "Tickets Pillan Baja Senior",
    ticketValue: 22500,
    tiketsPerDay: 30,
  },
  {
    id: 51,
    name: "Tickets Pillan Super Alta Mayor",
    ticketValue: 48600,
    tiketsPerDay: 30,
  },
  {
    id: 52,
    name: "Tickets Pillan Alta Mayor",
    ticketValue: 39600,
    tiketsPerDay: 30,
  },
  {
    id: 53,
    name: "Tickets Pillan Baja Mayor",
    ticketValue: 27000,
    tiketsPerDay: 30,
  },
  {
    id: 54,
    name: "Tickets Pillan Super Alta Estudiante",
    ticketValue: 39600,
    tiketsPerDay: 30,
  },
  {
    id: 55,
    name: "Tickets Pillan Alta Estudiante",
    ticketValue: 32400,
    tiketsPerDay: 30,
  },
  {
    id: 56,
    name: "Tickets Pillan Baja Estudiante",
    ticketValue: 22500,
    tiketsPerDay: 30,
  },
  {
    id: 57,
    name: "Tickets Pillan Super Alta Menor",
    ticketValue: 27000,
    tiketsPerDay: 30,
  },
  {
    id: 58,
    name: "Tickets Pillan Alta Menor",
    ticketValue: 22500,
    tiketsPerDay: 30,
  },
  {
    id: 59,
    name: "Tickets Pillan Baja Menor",
    ticketValue: 18000,
    tiketsPerDay: 30,
  },
];

const schedules = [
  {
    activityId: 1,
    schedule: "6:30",
  },
  {
    activityId: 15,
    schedule: "13:00",
  },
  {
    activityId: 16,
    schedule: "10:00",
  },
  {
    activityId: 16,
    schedule: "12:00",
  },
  {
    activityId: 16,
    schedule: "17:00",
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
    activityId: 17,
    schedule: "8:00",
  },
  {
    activityId: 3,
    schedule: "8:00",
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
    activityId: 18,
    schedule: "12:15",
  },
  {
    activityId: 19,
    schedule: "8:00",
  },
  {
    activityId: 20,
    schedule: "10:00",
  },
  {
    activityId: 20,
    schedule: "13:00",
  },
  {
    activityId: 4,
    schedule: "9:00",
  },
  {
    activityId: 21,
    schedule: "9:00",
  },
  {
    activityId: 5,
    schedule: "8:00",
  },
  {
    activityId: 31,
    schedule: "10:00",
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
