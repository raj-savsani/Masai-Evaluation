const express = require("express");

const router = express.Router();
const Movie = require("../models/movie.model");
const fs = require("fs");
const upload = require("../middelwares/upload");

router.post("/", upload.single("poster_url"), async (req, res) => {
  try {
    const movie = await Movie.create({
      name: req.body.name,
      actors: req.body.actors,
      languages: req.body.languages,
      directors: req.body.directors,
      poster_url: req.file.path,
    });
    return res.status(201).send(movie);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

router.get("/:actor", async (req, res) => {
  try {
    const movie = await Movie.find();
    return res.status(201).send(movie);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

module.exports = router;
