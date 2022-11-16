const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/comics", async (req, res) => {
  console.log("/comics");

  try {
    const response = await axios.get(
      `${process.env.URL_BASE}/comics?apiKey=${process.env.API_KEY}`
    );
    //console.log("Réponse ->", response.data);
    //res.status(200).json({ message: "OK" });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/comics/:id", async (req, res) => {
  console.log("/comics/id ->", req.params);
  const response = await axios.get(
    `${process.env.URL_BASE}/comics/${req.params.id}?apiKey=${process.env.API_KEY}`
  );
  try {
    //res.status(200).json({ message: "OK" });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
