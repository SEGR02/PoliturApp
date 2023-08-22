const SchedulesInActivities = require("../models/schedulesInActivities.models");

class ScheduleServices {
  static async getSchedulesById(id) {
    try {
      const result = await SchedulesInActivities.findAll({
        where: {
          activityId: id,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ScheduleServices;
