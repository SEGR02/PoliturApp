const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Clients = db.define("clients", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  fullname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING(35),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  birth: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING(20),
  },
  isPassport: {
    type: DataTypes.BOOLEAN,
    field: "is_passport",
    allowNull: false,
  },
  ndocument: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hotel: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  operator: {
    type: DataTypes.STRING(50),
  },
});

module.exports = Clients;
