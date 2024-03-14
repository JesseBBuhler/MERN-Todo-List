const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const passwordRequirements = {
  minLength: 8,
  minUppercase: 1,
  minLowercase: 1,
  minSymbols: 1,
};

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

userSchema.statics.signup = async function (email, password) {
  //check if all fields are complete
  if (!email || !password) {
    throw Error("All fields must be filled out");
  }

  //check if email is already in the database.
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email is already in use");
  }

  //check if valid email and strong password
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password, passwordRequirements)) {
    throw Error(
      "Password must be 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
    );
  }

  //create user
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  //check if all fields are complete
  if (!email || !password) {
    throw Error("All fields must be filled out");
  }

  //check if email exists in database
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  //check if password matches
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
