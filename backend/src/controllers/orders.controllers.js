const OrderServices = require("../services/orders.services");

const createOrder = async (req, res, next) => {
  try {
    const order = req.body;
    const result = await OrderServices.createOrder(order);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    const query = req.query;
    const result = await OrderServices.getAllOrders(query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getAvailableMonths = async (req, res, next) => {
  try {
    const result = await OrderServices.getMonthsAvailable();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getAvailableMonths,
};
