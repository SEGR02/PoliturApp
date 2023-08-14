const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ScheduledActivities = db.define("scheduled_activities", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passengersQty: {
    type: DataTypes.INTEGER,
    field: "passengers_qty",
    allowNull: false,
  },
  hour: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activityId: {
    type: DataTypes.INTEGER,
    field: "activity_id",
    allowNull: false,
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false,
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
    allowNull: false,
  },
  orderId: {
    type: DataTypes.INTEGER,
    field: "order_id",
  },
});

module.exports = ScheduledActivities;
