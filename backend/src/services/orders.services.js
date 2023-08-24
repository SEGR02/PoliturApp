const { where } = require("sequelize");
const Orders = require("../models/orders.models");

class OrderServices {
  static async createOrder(newOrder) {
    try {
      const result = await Orders.create(newOrder);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllOrders(query) {
    try {
      const result = await Orders.findAll({
        where: query,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
