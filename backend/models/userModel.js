const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {};

userSchema.statics.login = async function (email, password) {};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
