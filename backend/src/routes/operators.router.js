const { Router } = require("express");
const {
  createOperator,
  getAllOperators,
} = require("../controllers/operators.controllers");
const router = Router();

router.get("/", getAllOperators);
router.post("/", createOperator);

module.exports = router;
