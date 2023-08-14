const Activities = require("../models/activities.models");
const ScheduledActivities = require("../models/scheduledActivities.models");
const PassengersInScheduledActivities = require("../models/passengersInScheduledActivities.models");
const ScheduledActivitiesAndPaymentsInOrders = require("../models/scheduledActivitiesAndPaymentsInOrders.models");

class ActivitieServices {
  static async getAllActivities() {
    try {
      const result = await Activities.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async scheduleActivity(scheduledActivity, passengers) {
    try {
      const result = await ScheduledActivities.create(scheduledActivity);
      for (const passenger of passengers) {
        const result2 = await PassengersInScheduledActivities.create({
          scheduledActivityId: result.id,
          clientId: passenger.id,
        });
      }
      const result3 = await ScheduledActivitiesAndPaymentsInOrders.create({
        orderId: scheduledActivity.orderId,
        scheduledActivityId: result.id,
      });
      return { result, result3 };
    } catch (error) {
      throw error;
    }
  }
  static async getActivityById(id) {
    try {
      const result = await Activities.findAll({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAllActivitiesScheduled(query) {
    try {
      const result = await ScheduledActivities.findAll({
        where: query,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ActivitieServices;
