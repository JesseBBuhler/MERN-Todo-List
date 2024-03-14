const User = require("../models/userModel");

const loginUser = async (req, res) => {
  res.send("login called");
};

const signupUser = async (req, res) => {
  res.send("signup called");
};

module.exports = {
  signupUser,
  loginUser,
};
