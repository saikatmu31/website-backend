// modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

// config
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost";

// db
mongoose.connect(MONGO_URL, (err) => {
	if (err) throw err;
	console.log("Connected to Database");
});

// routes
app.get("/", (req, res) => {
	res.redirect("/api");
});

const indexRoutes = require("./routes/index");
app.use("/api/", indexRoutes);

// server
app.listen(port, () => console.log(`Server running at ${port}`));
