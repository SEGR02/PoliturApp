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

  static async scheduleActivity(scheduledActivity) {
    try {
      const result = await ScheduledActivities.create(scheduledActivity);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async enterPassengersInScheduledActivity(
    scheduledActivityId,
    passengers
  ) {
    try {
      for (const passenger of passengers) {
        const result = await PassengersInScheduledActivities.create({
          scheduledActivityId,
          clientId: passenger.id,
        });
      }
      return passengers;
    } catch (error) {
      throw error;
    }
  }

  static async registerActivitiesInOrders(scheduledActivityId, orderId) {
    try {
      const result = await ScheduledActivitiesAndPaymentsInOrders.create({
        scheduledActivityId,
        orderId,
      });
      return result;
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

  static async findActivityById(id) {
    try {
      const result = await Activities.findOne({
        where: id,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createActivity(newActivity) {
    try {
      const result = await Activities.create(newActivity);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteActivity(id) {
    try {
      const result = await Activities.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updateActivity(id, newActivityData) {
    try {
      const result = await Activities.update(newActivityData, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ActivitieServices;
