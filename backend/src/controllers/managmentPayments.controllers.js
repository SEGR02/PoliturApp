const ManagmentPaymentServices = require("../services/managmentPayments.services");
const OrderServices = require("../services/orders.services");

const createManagmentPayment = async (req, res, next) => {
  try {
    const managmentPayment = req.body;
    const result = await ManagmentPaymentServices.create(managmentPayment);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getAllManagmentPayments = async (req, res, next) => {
  try {
    const query = req.query;
    const result = await ManagmentPaymentServices.getAll(query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const createAutomaticManagmentPayment = async () => {
  const managmentPayment = {
    date: new Date().toISOString().slice(0, 10),
    hour: "23:59",
    title: "Informe de Credito",
    paymentFormat: "Credito",
    observations: "",
    amount: await OrderServices.getAmountManagmentPayments(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const result = await ManagmentPaymentServices.create(managmentPayment);
    console.log("Registro automático creado:", result);
  } catch (error) {
    console.error("Error al crear el registro automático:", error);
  }
};

module.exports = {
  createManagmentPayment,
  getAllManagmentPayments,
  createAutomaticManagmentPayment,
};
