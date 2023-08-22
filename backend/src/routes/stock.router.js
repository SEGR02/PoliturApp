const { Router } = require("express");
const { createStock, getStock } = require("../controllers/stock.controllers");
const router = Router();

router.get("/", getStock);
router.post("/", createStock);

module.exports = router;
