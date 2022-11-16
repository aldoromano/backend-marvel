// Les imports
const express = require("express");
require("dotenv").config();
const cors = require("cors");

// Variables
const app = express();

// use
app.use(express.json());
app.use(cors());

// Routes
const routeComics = require("./routes/comics");
const routeCharacter = require("./routes/character");

app.use(routeComics);
app.use(routeCharacter);

// Route de test
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome" });
});

// Problème de route
app.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

// Port du serveur
app.listen(process.env.PORT, () => {
  console.log("Server Marvel started...");
});
