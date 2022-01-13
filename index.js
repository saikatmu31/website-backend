require("dotenv").config();
require("./src/config/database").connect();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 4000;


const eventRoute = require('./src/routes/event')
app.use("/api", eventRoute);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
