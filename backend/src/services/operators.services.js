const Operators = require("../models/operators.models");

class OperatorServices {
  static async newOperator(operator) {
    try {
      const result = await Operators.create(operator);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async findAllOperators(query) {
    try {
      const result = await Operators.findAll({ where: query });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteOperator(id) {
    try {
      const result = await Operators.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateOperator(id, operator) {
    try {
      const result = await Operators.update(operator, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OperatorServices;
