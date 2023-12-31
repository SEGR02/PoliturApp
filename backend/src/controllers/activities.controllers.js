const ActivitieServices = require("../services/activities.services");
const StockServices = require("../services/stock.services");

const getAllActivities = async (req, res, next) => {
  try {
    const result = await ActivitieServices.getAllActivities();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const scheduleActivity = async (req, res, next) => {
  try {
    const scheduledActivity = req.body;
    const { passengers } = req.body;
    // * FIRST
    const scheduleActivity = await ActivitieServices.scheduleActivity(
      scheduledActivity
    );
    // * SECOND
    const enterPassengersInScheduledActivity =
      await ActivitieServices.enterPassengersInScheduledActivity(
        scheduleActivity.id,
        passengers
      );
    // * THIRD
    const registerActivitiesInOrders =
      await ActivitieServices.registerActivitiesInOrders(
        scheduleActivity.id,
        scheduleActivity.orderId
      );
    // * FOURTH
    const findActivityById = await ActivitieServices.findActivityById(
      scheduleActivity.activityId
    )
      // * FIVE
      .then(async (ans) => {
        const findExistingStock = await StockServices.findStock({
          date: scheduleActivity.date,
          hour: scheduleActivity.hour,
          activityId: scheduleActivity.activityId,
        })
          // * SIX
          .then(async (res) => {
            if (!res) {
              const createStock = await StockServices.createStock({
                date: scheduleActivity.date,
                hour: scheduleActivity.hour,
                activityId: scheduleActivity.activityId,
                stock: ans.tiketsPerDay - scheduleActivity.passengersQty,
                scheduledActivityId: scheduleActivity.id,
              });
            } else {
              const updateExistingStock = StockServices.updateStock(
                scheduleActivity,
                res
              );
            }
          });
      });
    res.json({
      scheduleActivity,
      enterPassengersInScheduledActivity,
      registerActivitiesInOrders,
      findActivityById,
    });
  } catch (error) {
    next(error);
  }
};

const getActivityById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ActivitieServices.getActivityById(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getAllActivitiesScheduled = async (req, res, next) => {
  try {
    const query = req.query;
    const result = await ActivitieServices.getAllActivitiesScheduled(query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const createActivity = async (req, res, next) => {
  try {
    const newActivity = req.body;
    console.log(newActivity);
    const result = await ActivitieServices.createActivity(newActivity);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteActivity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ActivitieServices.deleteActivity(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const updateActivity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newActivityData = req.body;
    const result = await ActivitieServices.updateActivity(id, newActivityData);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllActivities,
  scheduleActivity,
  getActivityById,
  getAllActivitiesScheduled,
  createActivity,
  deleteActivity,
  updateActivity,
};
