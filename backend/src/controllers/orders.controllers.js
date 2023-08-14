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

module.exports = {
  createOrder,
};
