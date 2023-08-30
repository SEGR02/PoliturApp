const { Op, Sequelize } = require("sequelize");
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
      const { month, year, sinceDate, untilDate, operator } = query;
      const filters = {};
      if (month && year) {
        const startDate = new Date(`${year}-${month}-01T00:00:00.000Z`);
        const endDate = new Date(
          `${year}-${parseInt(month) + 1}-01T00:00:00.000Z`
        );

        filters.buyDate = {
          [Op.gte]: startDate,
          [Op.lt]: endDate,
        };
      }

      if (sinceDate && untilDate) {
        filters.buyDate = {
          [Op.gte]: new Date(sinceDate),
          [Op.lt]: new Date(untilDate),
        };
        filters.is_credit = true;
        if (operator) filters.operator = operator;
      }

      const result = await Orders.findAll({
        where: (month && year) || (sinceDate && untilDate) ? filters : query,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getMonthsAvailable() {
    try {
      const orders = await Orders.findAll({
        attributes: [
          [Sequelize.fn("DISTINCT", Sequelize.col("buy_date")), "buy_date"],
        ],
      });

      const uniqueMonths = new Set();

      orders.forEach((order) => {
        const buyDate = order.getDataValue("buy_date");
        const month = new Date(buyDate).getMonth() + 1;
        const year = new Date(buyDate).getFullYear();
        const formattedMonth = `${month < 10 ? "0" + month : month}-${year}`;
        uniqueMonths.add(formattedMonth);
      });

      return Array.from(uniqueMonths);
    } catch (error) {
      throw error;
    }
  }
  static async getAmountManagmentPaymentsByOperator(operator) {
    try {
      const result = await Orders.findAll({
        where: {
          is_credit: true,
          buyDate: new Date().toISOString().slice(0, 10),
          operator: operator,
        },
      });
      result.total = 0;
      result.forEach((order) => {
        result.total += order.total;
      });
      return result.total;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;
