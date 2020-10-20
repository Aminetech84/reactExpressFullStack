const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");

const apiController = require("./apiController");

const port =  3000;


require('./models/db');

//app.get('/', (req, res) => res.send('Hello World!'))

const app = express();

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("/api", apiController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
