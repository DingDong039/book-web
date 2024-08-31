const mongoose = require("mongoose");

// Book Schema
const bookSchema = new mongoose.Schema(
  {
    bookISBN: {
      type: String,
      unique: true,
      index: true,
      required: "Book ISBN is required",
    },
    bookTitle: {
      type: String,
      required: "Book Title is required",
    },
    bookDescription: String,
    bookImage: String,
    bookCategorys: [
        { nameCategory : String }
    ],
    author: {
      required: "Author is required",
      firstName: { type: String },
      lastName: { type: String },
      birthday: { type: Date },
    },
    bookQty: Number,
    bookPrice: Number,
    bookPublisher: String,
    bookPublishDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
