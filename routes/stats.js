//GET Method
const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const getStats = async (req, res, next) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, "./harvey.json"));
        const stats = JSON.parse(data);
        const playerStats = stats.find(
            (player) => player.CostCentre === req.params.CostCentre
        );
        if (!playerStats) {
            const err = new Error("Player stats not found");
            err.status = 404;
            throw err;
        }
        res.json(playerStats);
    } catch (e) {
        next(e);
    }
};

router.route("/api/v1/stats/:CostCentre").get(getStats);

module.exports = router;

const statsFilePath = path.join(__dirname, "./harvey.json");

router
    .route("/api/v1/stats/:CostCentre")
    .get(getStats)
