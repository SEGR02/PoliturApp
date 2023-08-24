const { Router } = require("express");
const {
  getAllUsers,
  getSellerById,
} = require("../controllers/users.controllers");
const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getSellerById);

module.exports = router;
