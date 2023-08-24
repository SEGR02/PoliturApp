const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Orders = db.define("orders", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  buyDate: {
    type: DataTypes.STRING,
    field: "buy_date",
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  activitiesQty: {
    type: DataTypes.INTEGER,
    field: "activities_qty",
    allowNull: false,
  },
  payments_qty: {
    type: DataTypes.INTEGER,
    field: "payments_qty",
    allowNull: false,
  },
  sellerId: {
    type: DataTypes.INTEGER,
    field: "seller_id",
    allowNull: false,
  },
});

module.exports = Orders;
