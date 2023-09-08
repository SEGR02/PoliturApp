const { Router } = require("express");
const {
  createStock,
  getStock,
  updateStock,
} = require("../controllers/stock.controllers");
const router = Router();

router.get("/", getStock);
router.post("/", createStock);
router.put("/:id", updateStock);

module.exports = router;
