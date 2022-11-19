const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/comics", async (req, res) => {
  console.log("/comics");
  const limit = req.query.limit || 100;
  const skip = req.query.skip || 0;
  const name = req.query.name || "";
  console.log("params -> ", limit, skip, name);

  try {
    const response = await axios.get(
      `${process.env.URL_BASE}/comics?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}&name=${name}`
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
