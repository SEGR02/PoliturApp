const { Router } = require("express");
const router = Router();
const {
  createOrder,
  getAllOrders,
  getAvailableMonths,
} = require("../controllers/orders.controllers");

router.get("/", getAllOrders);
router.get("/availableMonths", getAvailableMonths);
router.post("/", createOrder);

module.exports = router;
