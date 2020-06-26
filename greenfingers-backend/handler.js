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

app.post("/plants", function (req, res) {
  const name = req.body.name;
  const picture = req.body.picture;
  const description = req.body.description;
  const location = req.body.location;
  const email = req.body.email;

  res.json({ message: `Received a request to add plant ${name} with description ${description}, picture ${picture}, location ${location}, and e-mail ${email}` });
});



module.exports.plantApp = serverless(app);
