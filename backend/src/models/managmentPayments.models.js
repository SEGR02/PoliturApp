const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ManagmentPayments = db.define("managment_payments", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hour: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentFormat: {
    type: DataTypes.STRING,
    field: "payment_format",
    allowNull: false,
  },
  observations: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = ManagmentPayments;
