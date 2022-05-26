const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");

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

      const user = new User({
        username,
        email,
        password,
      });

      await user.save();

      res.status(201).json({ message: "Successful registration" });
    } catch (error) {
      console.log("error", error);
    }
  }
);

module.exports = router;
