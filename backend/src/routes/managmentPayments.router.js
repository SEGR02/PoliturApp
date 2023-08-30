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
cron.schedule("56 17 * * *", createAutomaticManagmentPayment);

module.exports = router;
