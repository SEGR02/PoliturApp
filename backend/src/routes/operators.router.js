const { Router } = require("express");
const {
  createOperator,
  getAllOperators,
  deleteOperator,
  updateOperator,
} = require("../controllers/operators.controllers");
const router = Router();

router.get("/", getAllOperators);
router.post("/", createOperator);
router.put("/:id", updateOperator);
router.delete("/:id", deleteOperator);

module.exports = router;
