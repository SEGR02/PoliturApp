const { Router } = require("express");
const router = Router();
const { createPayments } = require("../controllers/payments.controllers");

router.post("/", createPayments);

module.exports = router;
