const express = require("express");
const {
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const api = express.Router();

api.route("/user").get(getAllUser).post(createUser).put(updateUser);


api.route("/:userId").get(getOneUser).delete(deleteUser);


module.exports = api;
