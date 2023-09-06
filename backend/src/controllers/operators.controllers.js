const OperatorServices = require("../services/operators.services");

const createOperator = async (req, res, next) => {
  try {
    const newOperator = req.body;
    const result = await OperatorServices.newOperator(newOperator);
    res.status(201).json(result);
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

const deleteOperator = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await OperatorServices.deleteOperator(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const updateOperator = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newOperatorData = req.body;
    const result = OperatorServices.updateOperator(id, newOperatorData);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOperator,
  getAllOperators,
  deleteOperator,
  updateOperator,
};
