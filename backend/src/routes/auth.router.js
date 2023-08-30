const { Router } = require("express");
const router = Router();
const {
  register,
  login,
  update,
  deleteSeller,
} = require("../controllers/auth.controllers");

router.post("/register", register);
router.post("/login", login);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteSeller);

module.exports = router;
