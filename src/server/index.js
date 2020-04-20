const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("./router"));

app.listen(3001, () =>
    console.log("> Express server is running on localhost:3001")
);
