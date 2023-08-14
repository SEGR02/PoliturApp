const ActivitieServices = require("../services/activities.services");

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
    const result = await ActivitieServices.scheduleActivity(
      scheduledActivity,
      passengers
    );
    res.json(result);
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

module.exports = {
  getAllActivities,
  scheduleActivity,
  getActivityById,
  getAllActivitiesScheduled,
};
