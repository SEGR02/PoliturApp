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

module.exports = {
  getSchedulesById,
};
