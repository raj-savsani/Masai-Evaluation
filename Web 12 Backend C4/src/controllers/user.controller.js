const express = require("express");

const router = express.Router();
const User = require("../models/user.model");
const fs = require("fs");
const upload = require("../middelwares/upload");

router.post("/",upload.single('profile_photo_url'), async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_photo_url: req.file.path,
    });
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

module.exports = router;
