const Users = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

class AuthServices {
  static async register(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async login(field) {
    try {
      const { email, password } = field;
      const user = await Users.findOne({
        where: { email },
      });
      if (user) {
        const isValid = bcrypt.compareSync(password, user.password);
        return isValid ? { isValid, user } : { isValid };
      }
      return { correctEmail: false };
    } catch (error) {
      throw error;
    }
  }

  static async genToken(data) {
    try {
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }

  static async updateSeller(id, newData) {
    try {
      const updateSeller = await Users.update(newData, {
        where: { id },
      });
      return updateSeller;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const updateSeller = await Users.destroy({ where: { id } });
      return updateSeller;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
