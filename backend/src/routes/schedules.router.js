const { Router } = require("express");
const {
  getSchedulesById,
  createSchedule,
  deleteSchedule,
} = require("../controllers/schedules.controllers");
const router = Router();

router.get("/:id", getSchedulesById);
router.post("/", createSchedule);
router.delete("/:id", deleteSchedule);

module.exports = router;
