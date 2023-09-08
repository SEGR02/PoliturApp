const StockManagment = require("../models/stockManagment.models");
const StockInScheduledActivities = require("../models/stockInScheduledActivities.models");

class StockServices {
  static async createStock(hourly) {
    try {
      const result = await StockManagment.create(hourly);
      const result2 = await StockInScheduledActivities.create({
        stockManagmentId: result.id,
        scheduledActivityId: hourly.scheduledActivityId,
      });
      return { result, result2 };
    } catch (error) {
      throw error;
    }
  }

  static async findStock(hourly) {
    try {
      const result = await StockManagment.findAll({
        where: {
          date: hourly.date,
          hour: hourly.hour,
          activityId: hourly.activityId,
        },
      });
      return result.length == 0 ? undefined : result;
    } catch (error) {
      throw error;
    }
  }

  static async getStockByQuery(query) {
    try {
      const result = await StockManagment.findAll({
        where: query,
      });
      return result.length == 0 ? undefined : result;
    } catch (error) {
      throw error;
    }
  }

  static async updateStock(activity, stock) {
    try {
      const updateStock = await StockManagment.update(
        {
          stock: stock[0].stock - activity.passengersQty,
        },
        {
          where: {
            date: activity.date,
            hour: activity.hour,
            activityId: activity.activityId,
          },
        }
      );
      const addScheduledActivityInStockManagment =
        await StockInScheduledActivities.create({
          stockManagmentId: stock[0].id,
          scheduledActivityId: activity.id,
        });
      return { updateStock, addScheduledActivityInStockManagment };
    } catch (error) {
      throw error;
    }
  }

  static async modifyStock(id, newStock) {
    try {
      const result = await StockManagment.update(newStock, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = StockServices;
