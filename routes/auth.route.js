const { Router } = require("express");
const router = Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isUsed = await User.findOne({ email });

    if (isUsed) {
      return res.status(300).json({ message: "ERROR" });
    }

    const user = new User({
      username,
      email,
      password,
    });

    await user.save();

    res.status(201).json({ message: "SUCCESS" });
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
