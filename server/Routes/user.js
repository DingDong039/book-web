const express = require("express");
const router = express.Router();

const {
  get,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../Controllers/user");

router.get("/user", get);
router.get("/user/:uid", getUser);
router.post("/user", createUser);
router.put("/user/:uid", updateUser);
router.delete("/user/:uid", deleteUser);

module.exports = router;
