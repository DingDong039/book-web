const User = require('../Models/Users')

exports.list = async (req, res) => {
  try {
    let user = await User.find({}).exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};

exports.getUser = async (req, res) => {
  try {
    let uid = req.params.uid;
    let user = await User.findById(uid).exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};

exports.createUser = async (req, res) => {
  try {
    let user = await User(req.body).save();

    res.status(201).json({
      message: "User added successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};

exports.updateUser = async (req, res) => {
  try {
    let uid = req.params.uid;
    const updateUser = await User.findOneAndUpdate({ _id: uid }, req.body, {
      new: true,
    }).exec();

    res.status(200).json({
      message: "User updated successfully",
      updateUser: updateUser,
    });
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let uid = req.params.uid;
    const deleteUser = await User.findByIdAndDelete(uid).exec();
    
    res.status(200).json({
      message: "User deleted successfully",
      deleteUser: deleteUser,
    });
  } catch (error) {
    res.status(500).send(`Server Error: ${error}`);
  }
};
