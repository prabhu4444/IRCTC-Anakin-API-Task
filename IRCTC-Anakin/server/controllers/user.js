const jwt = require("jsonwebtoken");
const user = require("../models/user");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const createUser = async (req, res) => {
  const { name, email, password, is_admin, phone } = req.body;
  if (!name || !email || !password || !phone)
    return res.status(200).json({
      msg: "enter all the fields",
    });
  const duplicate = await user.findOne({
    email,
  });
  if (duplicate) return res.json({ msg: "user with same email already exist" });
  if (is_admin == null) is_admin = false;
  const salt = uuidv4();
  const encry_password = crypto
    .createHmac("sha256", salt)
    .update(password)
    .digest("hex");
  const newUser = new user({
    name,
    email,
    encry_password,
    salt,
    is_admin,
    phone,
  });
  await newUser
    .save()
    .then((user) => {
      res.status(200).json({
        email: user.email,
        name: user.name,
        is_admin: user.is_admin,
        id: user._id,
        phone: user.phone,
      });
    })
    .catch((err) => res.json({ err }));
};
const getUser = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.json({ msg: "id not found" });
  const foundUser = await user.findOne({
    _id: id,
  });
  if (!foundUser) return res.json({ msg: "User not Available" });
  return res.json({
    id: foundUser._id,
    email: foundUser.email,
    name: foundUser.name,
    phone: foundUser.phone,
    is_admin: foundUser.is_admin,
  });
};
const getAllUsers = async (req, res) => {
  await user
    .find({})
    .then((users) => {
      return res.status(200).json({
        users,
      });
    })
    .catch((err) => res.json({ err }));
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.json({ msg: "no id detected" });
  const delUser = await user.findOne({ _id: id });
  if (!delUser) return res.json({ msg: "User Does not exist" });
  delUser
    .deleteOne()
    .then((deletedUser) => {
      return res.json({
        id: deletedUser.id,
        name: deletedUser.name,
        email: deletedUser.email,
        phone: deletedUser.phone,
        is_admin: deletedUser.is_admin,
      });
    })
    .catch((err) => res.json({ err }));
};
const returnCurrentUser = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.json({ msg: "Token Does not Exist" });

  try {
    var decoded = jwt.verify(token, process.env.TOKENKEY);
  } catch (err) {
    console.log(err);
  }
  const userExist = await user
    .findOne({ email: decoded.email })
    .catch((err) => console.log(err));

  if (!userExist) return res.json({ msg: "User Does not Exist" });

  return res.json({
    name: userExist.name,
    email: userExist.email,
    is_admin: userExist.is_admin,
    phone: userExist.phone,
    id: userExist._id,
  });
};
module.exports = {
  createUser,
  getUser,
  getAllUsers,
  deleteUser,
  returnCurrentUser,
};
