const db = require("../utils/database");

const activities = [
  {
    name: "Ascenso al Volcan",
    ticketValue: 135000,
    tiketsPerDay: 12,
  },
  {
    name: "Termas Geometricas",
    ticketValue: 60000,
    tiketsPerDay: 15,
  },
  {
    name: "Tour Huilo",
    ticketValue: 55000,
    tiketsPerDay: 15,
  },
  {
    name: "Tour Zona + Termas Huife",
    ticketValue: 45000,
    tiketsPerDay: 15,
  },
  {
    name: "Trekking Parque Huerquerhue",
    ticketValue: 60000,
    tiketsPerDay: 12,
  },
  {
    name: "Trekking Lagunas Andinas",
    ticketValue: 60000,
    tiketsPerDay: 12,
  },
  {
    name: "Rafting Bajo",
    ticketValue: 35000,
    tiketsPerDay: 24,
  },
  {
    name: "Rafting Alto",
    ticketValue: 45000,
    tiketsPerDay: 12,
  },
  {
    name: "Canyoning",
    ticketValue: 45000,
    tiketsPerDay: 8,
  },
  {
    name: "Hidrospeed",
    ticketValue: 45000,
    tiketsPerDay: 10,
  },
  {
    name: "Transfer",
    ticketValue: 20000,
    tiketsPerDay: 10,
  },
  {
    name: "Cuevas Volcanicas",
    ticketValue: 49000,
    tiketsPerDay: 15,
  },
  {
    name: "Termas Huife",
    ticketValue: 45000,
    tiketsPerDay: 15,
  },
  {
    name: "Tour Pesca Deportiva",
    ticketValue: 160000,
    tiketsPerDay: 4,
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

module.exports = activities;
