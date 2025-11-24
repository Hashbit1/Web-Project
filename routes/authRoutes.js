// routes/authRoutes.js

const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

// Register page
router.get("/register", (req, res) => {
  res.render("register");
});

// Register user
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  try {
    await User.create({
      username,
      email,
      password: hash
    });

    res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.send("Error registering user");
  }
});

// Login page
router.get("/login", (req, res) => {
  res.render("login");
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.send("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Incorrect password");

  req.session.user = user;
  res.redirect("/");
});

// Logout user
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
