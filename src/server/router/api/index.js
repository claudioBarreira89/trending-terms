const router = require("express").Router();
const googleTrends = require("google-trends-api");

router.post("/configuration", async (req, res) => {
    res.setHeader("Content-Type", "application/json");

    res.send({ numberOfTerms: 5 });
});

router.get("/search", async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { terms, geo } = req.query;
    const keyword = terms.split("-");

    try {
        const response = await googleTrends.interestOverTime({
            keyword,
            geo
        });

        const data = JSON.parse(response);
        const { timelineData } = data.default;

        let results = {};
        for (let i = 0; i < timelineData.length; i++) {
            for (let ii = 0; ii < keyword.length; ii++) {
                if (!results[keyword[ii]]) {
                    results[keyword[ii]] = [];
                }
                results[keyword[ii]].push({
                    time: timelineData[i].formattedTime,
                    value: timelineData[i].value[ii]
                });
            }
        }

        res.send(results);
    } catch (err) {
        res.send({ status: err.message || "generic_error" });
    }
});

module.exports = router;
