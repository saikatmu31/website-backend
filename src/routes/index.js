const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Root");
});

module.exports = routes;
