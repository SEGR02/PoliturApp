const StockServices = require("../services/stock.services");

const createStock = async (req, res, next) => {
  try {
    const hourly = req.body;
    const { scheduledActivityId } = req.body;
    const result = await StockServices.createStock(hourly);
    const result2 = await StockServices.enterScheduledActivitiesInStock({
      stockManagmentId: result.id,
      scheduledActivityId,
    });
    res.json({ result, result2 });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const findAndUpdateStock = async (req, res, next) => {
  try {
    const stock = req.body;
    const result = await StockServices.createStock(stock);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getStock = async (req, res, next) => {
  try {
    const query = req.query;
    const result = await StockServices.getStockByQuery(query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const updateStock = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newStock = req.body;
    const result = await StockServices.modifyStock(id, newStock);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createStock,
  findAndUpdateStock,
  getStock,
  updateStock,
};
