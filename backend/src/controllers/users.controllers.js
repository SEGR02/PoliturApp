const UserServices = require("../services/users.services");

const getAllUsers = async (req, res, next) => {
  try {
    const query = req.query;
    const result = await UserServices.getAllUsers(query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getSellerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.findSellerById(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getSellerById,
};
