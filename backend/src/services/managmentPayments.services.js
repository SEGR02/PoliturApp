const { Op } = require("sequelize");
const ManagmentPayments = require("../models/managmentPayments.models");

class ManagmentPaymentServices {
  static async create(managmentPayment) {
    try {
      const result = await ManagmentPayments.create(managmentPayment);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAll(query) {
    try {
      const { sinceDate, untilDate, operator } = query;
      const filters = {};
      if (sinceDate && untilDate) {
        filters.date = {
          [Op.gte]: new Date(sinceDate),
          [Op.lt]: new Date(untilDate),
        };
        if (operator) filters.operator = operator;
      }

      const result = await ManagmentPayments.findAll({ where: filters });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ManagmentPaymentServices;
