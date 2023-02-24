const express = require("express");
const router = express.Router();

const controller = require("../controller/auctioncancel.controller");

router.post("/api/auctioncanceldata", controller.auctioncancel);
router.get("/api/auctioncancel", controller.auctioncancelData);

module.exports = router;
