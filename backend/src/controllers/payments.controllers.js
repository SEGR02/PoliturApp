const PaymentServices = require("../services/payments.services");

const createPayments = async (req, res, next) => {
  try {
    const payment = req.body;
    const result = await PaymentServices.createPayments(payment);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getAllPayments = async (req, res, next) => {
  try {
    const query = req.query;
    const result = await PaymentServices.findAllPayments(query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPayments,
  getAllPayments,
};
