const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "plants"
});

app.get("/plants", function (req, res) {
  console.log(req);
  connection.query("SELECT * FROM Plant", function (err, data) {
    if (err) {
      res.status(500).json({
        error: err
      })
    } else {
      res.status(200).json({ plants: data })
    }
  })
})

/*res.status(200).json({
  plants: [{
    "id": 1,
    "name": "cactus",
    "picture": "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1515603160/products/cactus-45d5ec.jpg",
    "description": "Desert plant that has thick, leafless stems covered in prickly spines or sharp spikes.",
    "location": "Manchester",
    "email": "cactus@example.com"
  },
  {
    "id": 2,
    "name": "fiddle-leaf fig",
    "picture": "https://media.bunnings.com.au/Product-800x800/aae863bf-c09a-4642-8af4-5493a9ec1b16.jpg",
    "description": "Has a tropical look with lyre-shaped leaves.",
    "location": "Chorlton",
    "email": "fig@example.com"
  }]
})
});*/

app.post("/plants", function (req, res) {
  const newPlant = req.body;

  connection.query("INSERT INTO Plant SET ?", [newPlant], function (err, data) {
    if (err) {
      response.status(500).json({ error: err });
    } else {
      newPlant.id = data.insertId;
      response.status(201).json({ newPlant });
    }
  });
});

/*
  const name = req.body.name;
  const picture = req.body.picture;
  const description = req.body.description;
  const location = req.body.location;
  const email = req.body.email;

  res.status(200).json({ message: `Received a request to add plant ${name} with description ${description}, picture ${picture}, location ${location}, and e-mail ${email}` });
});*/



module.exports.plantApp = serverless(app);
