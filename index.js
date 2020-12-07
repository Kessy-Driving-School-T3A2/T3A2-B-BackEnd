// pull in required dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// initialize app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//access-controle-allow-origin for react
app.use(cors());

//database
// pull in ATLAS_URI from .env file
const uri = process.env.ATLAS_URI;
// connect to mongodb using mongoose
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch(err => {
    console.error("Error connecting to mongoDB", err);
  });

app.use(express.json());

//port
// set the port to run the server
const port = process.env.PORT || 3000;
//listening to port
app.listen(port, () => {
  console.log(
    `🌻 🌻 🌻 Express API listening on port http://localhost:${port} !🌻 🌻 🌻`
  );
});
