const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwtToken = require("jsonwebtoken");

router.post(
  "/signup",
  [
    check("username", "Incorrect username").isString().isLength({ min: 4 }),
    check("email", "Incorrect email").isEmail(),
    check("password", "Incorrect password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Incorrect data",
        });
      }
      const { username, email, password } = req.body;

      const isUsed = await User.findOne({ username });

      if (isUsed) {
        return res.status(300).json({ message: "This user already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        username,
        email,
        password: hashedPassword,
      });

      await user.save();

      res.status(201).json({ message: "Successful registration" });
    } catch (error) {
      console.log("error", error);
    }
  }
);

router.post(
  "/signin",
  [
    check("email", "Incorrect email").isEmail(),
    check("password", "Incorrect password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Incorrect data",
        });
      }
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "This user was not found" });
      }

      const isMatch = bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "This user was not found" });
      }

      const jwtSecret = "wwrgjwrg-2345jjqwqep140twjgqopfq245";

      const token = jwtToken.sign({ userId: user.id }, jwtSecret, {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id });
    } catch (error) {
      console.log("error", error);
    }
  }
);

module.exports = router;
