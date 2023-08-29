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
      const result = await ManagmentPayments.findAll({ where: query });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ManagmentPaymentServices;
