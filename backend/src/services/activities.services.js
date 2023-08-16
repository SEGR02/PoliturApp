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
  // static async scheduleActivity(scheduledActivity, passengers) {
  //   try {
  //     const result = await ScheduledActivities.create(scheduledActivity);
  //     for (const passenger of passengers) {
  //       const result2 = await PassengersInScheduledActivities.create({
  //         scheduledActivityId: result.id,
  //         clientId: passenger.id,
  //       });
  //     }
  //     const result3 = await ScheduledActivitiesAndPaymentsInOrders.create({
  //       orderId: scheduledActivity.orderId,
  //       scheduledActivityId: result.id,
  //     });
  //     const result4 = await this.findActivityById(result.activityId);
  //     let stock = undefined;
  //     for (const atributes of result4) {
  //       stock = atributes.tiketsPerDay;
  //     }

  //     const result5 = await StockServices.findStockAndUpdateOrCreate({
  //       date: result.date,
  //       hour: result.hour,
  //       activityId: result.activityId,
  //       stock: stock - result.passengersQty,
  //       scheduledActivityId: result.id,
  //     });
  //     return { result, result3, result5 };
  //   } catch (error) {
  //     throw error;
  //   }
  // }

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
}

module.exports = ActivitieServices;
