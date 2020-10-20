/**
 * Imports
 */

const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");
require("dotenv/config");
const cors = require('cors');

/**
 * Import Routes
 */

const postsRoute = require("./routes/posts");

/**
 * Initializing Express
 */
const app = express();

/**
 * Middlewares
 */
app.use(cors());
app.use(bodyParser.json());

/**
 * Routes
 */

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("We're here");
  console.log(req.body);
});

/**
 * Connect to Database
 */
mongoose.set("useUnifiedTopology", true);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB!")
);
/**
 * Listening to port
 */

app.listen(process.env.PORT || 5000);
