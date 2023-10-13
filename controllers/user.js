const User = require("../schemas/User");

// get all users
const getAllUser = async (req, res) => {
  try {
    const user = await User.find().sort({ score: -1 });
    if (!user.length) {
      res.status(200).json({ msg: "No user in the DB" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get one user
const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json(user);
    } else {
      res.status(404).json({ msg: "User not be found..." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a new user
const createUser = async (req, res) => {
  try {
    // We grab exactly the keys that we have in the blueprint (Schema)
    const { username, score } = req.body;
    const user = await User.create({ username, score });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update an user
const updateUser = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOneAndUpdate(
      { username: username },
      {
        $inc: { score: 1 },
      },
      {
        new: true, // update and give me the new data
        upsert: true,
      }
    );

    if (!user) {
      res.status(404).json({ msg: "I don't Know this user : (" });
    } else {
      res.status(200).json({ msg: "User update successfully: (" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
// delete an User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id);

    if (!user) {
      res.status(404).json({ msg: "I don't Know this user : (" });
    } else {
      res.status(200).json({ msg: "User delete successfully: (" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
