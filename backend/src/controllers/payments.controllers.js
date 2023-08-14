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

module.exports = {
  createPayments,
};
