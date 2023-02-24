const express = require("express");
const router = express.Router();

const controller = require("../controller/auction.controller");

router.post("/api/auctiondata", controller.auction);
router.get("/api/auction", controller.auctionData);

module.exports = router;
