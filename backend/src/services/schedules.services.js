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

  static async createSchedule(newSchedule) {
    try {
      const result = await SchedulesInActivities.create(newSchedule);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteSchedule(id) {
    try {
      const result = await SchedulesInActivities.destroy({
        where: { activityId: id },
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ScheduleServices;
