const { Router } = require("express");
const router = Router();
const {
  createPayments,
  getAllPayments,
} = require("../controllers/payments.controllers");

router.get("/", getAllPayments);
router.post("/", createPayments);

module.exports = router;
