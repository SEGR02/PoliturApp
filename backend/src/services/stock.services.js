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
}

module.exports = StockServices;
