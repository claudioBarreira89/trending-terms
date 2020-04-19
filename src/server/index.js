const express = require("express");
const bodyParser = require("body-parser");
const googleTrends = require("google-trends-api");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/terms", async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { terms } = req.query;
    const keyword = terms.split("-");

    const data = await googleTrends.interestOverTime({
        keyword
    });

    res.send(data);
});

app.listen(3001, () =>
    console.log("> Express server is running on localhost:3001")
);
