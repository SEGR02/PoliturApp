const { Router } = require("express");
const { createStock } = require("../controllers/stock.controllers");
const router = Router();

router.post("/", createStock);

module.exports = router;
