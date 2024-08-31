const express = require("express");
const router = express.Router();

const {
  list,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../Controllers/book");

router.get("/book", list);
router.get("/book/:BookID", getBook);
router.post("/book", createBook);
router.put("/book/:BookID", updateBook);
router.delete("/book/:BookID", deleteBook);

module.exports = router;
