const { Router } = require("express");
const cron = require("node-cron");
const {
  createManagmentPayment,
  getAllManagmentPayments,
  createAutomaticManagmentPayment,
} = require("../controllers/managmentPayments.controllers");
const router = Router();

router.get("/", getAllManagmentPayments);
router.post("/", createManagmentPayment);
cron.schedule("59 23 * * *", createAutomaticManagmentPayment);

module.exports = router;
