const { Router } = require("express");
const router = Router();
const {
  createOrder,
  getAllOrders,
} = require("../controllers/orders.controllers");

router.get("/", getAllOrders);
router.post("/", createOrder);

module.exports = router;
