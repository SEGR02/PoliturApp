const ScheduleServices = require("../services/schedules.services");

const getSchedulesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ScheduleServices.getSchedulesById(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const createSchedule = async (req, res, next) => {
  try {
    const newSchedule = req.body;
    const result = await ScheduleServices.createSchedule(newSchedule);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteSchedule = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ScheduleServices.deleteSchedule(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSchedulesById,
  createSchedule,
  deleteSchedule,
};
