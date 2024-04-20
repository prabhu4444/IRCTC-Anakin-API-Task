const user = require("../models/user");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.json({ msg: "please enter all the credentials" });
  const userExist = await user.findOne({ email });
  if (!userExist)
    return res.json({ msg: "user does not exist. please sign up" });
  if (
    userExist.encry_password !=
    crypto.createHmac("sha256", userExist.salt).update(password).digest("hex")
  )
    return res.json({ msg: "invalid password" });
  const token = jwt.sign({ email: userExist.email }, process.env.TOKENKEY);
  res
    .cookie("token", token, {
      httpOnly: false,
    })
    .json({
      email: userExist.email,
      name: userExist.name,
      is_admin: userExist.is_admin,
      token: token,
      id: userExist._id,
      phone: userExist.phone,
    });
};
const logoutUser = async (req, res) => {
  res.clearCookie("token").json({
    msg: "Logout Successful",
  });
};

module.exports = { loginUser, logoutUser };
