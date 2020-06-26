const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/plants", function (req, res) {
  res.send({ plants: ["cactus", "rose"] })
});

module.exports.plantApp = serverless(app);
