const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const SchedulesInActivities = db.define("schedules_in_activities", {
  activityId: {
    type: DataTypes.INTEGER,
    field: "activity_id",
    allowNull: false,
  },
  schedule: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = SchedulesInActivities;
