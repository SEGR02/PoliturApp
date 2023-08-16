const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const StockInScheduledActivities = db.define("stock_in_scheduled_activities", {
  stockManagmentId: {
    type: DataTypes.INTEGER,
    field: "stock_managment_id",
    allowNull: false,
  },
  scheduledActivityId: {
    type: DataTypes.INTEGER,
    field: "scheduled_activity_id",
    allowNull: false,
  },
});

module.exports = StockInScheduledActivities;
