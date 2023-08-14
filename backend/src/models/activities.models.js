const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Activities = db.define("activities", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  ticketValue: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tiketsPerDay: {
    type: DataTypes.INTEGER,
    field: "tickets_per_day",
    allowNull: false,
  },
});

module.exports = Activities;
