const express = require("express");

const router = express.Router();
const Screen  = require("../models/screen.model");


router.post("/", async (req, res) => {
  try {
    const screen = await Screen.create(req.body);
    return res.status(201).send(screen);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

module.exports = router;