const OperatorServices = require("../services/operators.services");

const createOperator = async (req, res, next) => {
  try {
    const newOperator = req.body;
    const result = await OperatorServices.newOperator(newOperator);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getAllOperators = async (req, res, next) => {
  try {
    const query = req.query;
    const result = await OperatorServices.findAllOperators(query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOperator,
  getAllOperators,
};
