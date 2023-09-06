const { Router } = require("express");
const router = Router();
const {
  getAllActivities,
  scheduleActivity,
  getActivityById,
  getAllActivitiesScheduled,
  createActivity,
  deleteActivity,
  updateActivity,
} = require("../controllers/activities.controllers");

router.get("/", getAllActivities);
router.get("/scheduled", getAllActivitiesScheduled);
router.get("/:id", getActivityById);
router.post("/", scheduleActivity);
router.post("/create", createActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);

module.exports = router;
