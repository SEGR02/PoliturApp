const { Router } = require("express");
const router = Router();
const {
  createClient,
  getAllClients,
  getClientsByScheduledActivity,
} = require("../controllers/clients.controllers");

router.get("/", getAllClients);
router.get("/:id", getClientsByScheduledActivity);
router.post("/", createClient);

module.exports = router;
