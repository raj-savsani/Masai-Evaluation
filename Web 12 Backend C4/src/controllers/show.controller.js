const express = require("express");

const router = express.Router();
const Show = require("../models/show.model");

router.post("/", async (req, res) => {
  try {
    const show = await Show.create(req.body);
    return res.status(201).send(show);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

router.get("/:movie_id", async (req, res) => {
  try {
    const show = await Show.findOne({ movie_id: req.params.movie_id })
      .populate("movie_id")
      .populate("screen_id")
      .populate({ path: "screen_id", populate: { path: "theatre_id" } });
    return res.status(200).send(show);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

router.get("/:movie_id/seats", async (req, res) => {
  try {
    const show = await Show.findOne({ movie_id: req.params.movie_id })
      .populate("movie_id")
      .populate("screen_id")
      .populate({ path: "screen_id", populate: { path: "theatre_id" } });
    return res.status(200).send(show);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

router.get("/:location", async (req, res) => {
  try {
    const show = await show
      .find({ location: req.params.location })
      .populate("movie_id")
      .populate("screen_id")
      .populate({ path: "screen_id", populate: { path: "theatre_id" } });
    return res.status(200).send(show);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

module.exports = router;
