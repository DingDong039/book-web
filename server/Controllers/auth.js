const User = require("../Models/Users");

exports.register = async (req, res) => {
  try {
    let user = await User(req.body).save();

    res.status(201).json({
      message: "User added successfully",
    });
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};
