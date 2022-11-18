const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/characters", async (req, res) => {
  console.log("/characters....");
  const limit = req.query.limit || 100;
  const skip = req.query.skip || 0;
  const name = req.query.name || "";

  console.log("params -> ", limit, skip, name);
  try {
    const response = await axios(
      `${process.env.URL_BASE}/characters?apiKey=${process.env.API_KEY}&limit=${limit}&skip=${skip}&name=${name}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/character/:id", async (req, res) => {
  console.log("/character/id -> ", req.params);
  const response = await axios(
    `${process.env.URL_BASE}/character/${req.params.id}?apiKey=${process.env.API_KEY}`
  );
  try {
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
