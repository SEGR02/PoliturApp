const { Router } = require("express");
const router = Router();
const {
  getAllActivities,
  scheduleActivity,
  getActivityById,
  getAllActivitiesScheduled,
} = require("../controllers/activities.controllers");

router.get("/", getAllActivities);
router.get("/scheduled", getAllActivitiesScheduled);
router.get("/:id", getActivityById);
router.post("/", scheduleActivity);

module.exports = router;
