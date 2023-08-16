const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const StockManagment = db.define("stock_managment", {
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
  activityId: {
    type: DataTypes.INTEGER,
    field: "activity_id",
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = StockManagment;
