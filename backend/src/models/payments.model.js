const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Payments = db.define("payments", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  isCredit: {
    type: DataTypes.BOOLEAN,
    field: "is_credit",
    allowNull: false,
  },
  paymentType: {
    type: DataTypes.STRING,
    field: "payment_type",
    defaultValue: "Credito",
  },
  currency: {
    type: DataTypes.STRING,
    defaultValue: "CLP",
  },
  total: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  orderId: {
    type: DataTypes.INTEGER,
    field: "order_id",
  },
});

module.exports = Payments;
