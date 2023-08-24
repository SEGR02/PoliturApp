const Users = require("../models/user.models");

class UserServices {
  static async getAllUsers(query) {
    try {
      const result = await Users.findAll({ where: query });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async findSellerById(id) {
    try {
      const result = await Users.findOne({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
