const Book = require('../Models/Books')

exports.list = async (req, res) => {
  try {
    let book = await Book.find({}).exec();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};

exports.getBook = async (req, res) => {
  try {
    let uid = req.params.uid;
    let book = await Book.findById(uid).exec();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};

exports.createBook = async (req, res) => {
  try {
    let book = await Book(req.body).save();

    res.status(201).json({
      message: "Book added successfully",
      book: book,
    });
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};

exports.updateBook = async (req, res) => {
  try {
    let uid = req.params.uid;
    const updateBook = await Book.findOneAndUpdate({ _id: uid }, req.body, {
      new: true,
    }).exec();

    res.status(200).json({
      message: "Book updated successfully",
      updateBook: updateBook,
    });
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    let uid = req.params.uid;
    const deleteBook = await Book.findByIdAndDelete(uid).exec();
    
    res.status(200).json({
      message: "Book deleted successfully",
      deleteBook: deleteBook,
    });
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};
