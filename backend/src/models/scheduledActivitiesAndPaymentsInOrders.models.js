const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ScheduledActivitiesAndPaymentsInOrders = db.define(
  "scheduled_activities_and_payments_in_orders",
  {
    orderId: {
      type: DataTypes.INTEGER,
      field: "order_id",
      allowNull: false,
    },
    scheduledActivityId: {
      type: DataTypes.INTEGER,
      field: "scheduled_activity_id",
    },
    paymentsId: {
      type: DataTypes.INTEGER,
      field: "payments_id",
    },
  }
);

module.exports = ScheduledActivitiesAndPaymentsInOrders;
