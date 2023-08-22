const { Router } = require("express");
const { getSchedulesById } = require("../controllers/schedules.controllers");
const router = Router();

router.get("/:id", getSchedulesById);

module.exports = router;
