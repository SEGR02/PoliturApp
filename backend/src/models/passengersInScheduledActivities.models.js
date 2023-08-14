const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const PassengersInScheduledActivities = db.define(
  "passengers_in_scheduled_activities",
  {
    scheduledActivityId: {
      type: DataTypes.INTEGER,
      field: "scheduled_activity_id",
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      field: "client_id",
      allowNull: false,
    },
  }
);

module.exports = PassengersInScheduledActivities;
