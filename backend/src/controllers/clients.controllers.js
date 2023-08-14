const ClientServices = require("../services/clients.services");

const createClient = async (req, res, next) => {
  try {
    const clientData = req.body;
    const result = await ClientServices.createClient(clientData);
    if (result) res.status(201).json({ message: "user created" });
  } catch (error) {
    next(error);
  }
};

const getAllClients = async (req, res, next) => {
  try {
    const result = await ClientServices.getAllClients();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getClientsByScheduledActivity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ClientServices.getClientsByScheduledActivity(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createClient,
  getAllClients,
  getClientsByScheduledActivity,
};
