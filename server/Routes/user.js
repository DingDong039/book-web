const express = require("express");
const router = express.Router();

const {
  list,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../Controllers/user");

router.get("/user", list);
router.get("/user/:uid", getUser);
router.post("/user", createUser);
router.put("/user/:uid", updateUser);
router.delete("/user/:uid", deleteUser);

module.exports = router;
